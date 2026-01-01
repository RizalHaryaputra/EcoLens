<template>
    <div class="w-full max-w-3xl mx-auto">

        <div v-if="!result" class="relative">

            <input type="file" ref="fileInput" accept="image/*" class="hidden" @change="handleFileSelect" />

            <div @click="$refs.fileInput.click()" @dragover.prevent="isDragging = true"
                @dragleave.prevent="isDragging = false" @drop.prevent="handleDrop" :class="[
                    'border-3 border-dashed rounded-3xl p-12 text-center cursor-pointer transition-all duration-300 ease-in-out',
                    isDragging ? 'border-green-500 bg-green-50 scale-102' : 'border-gray-300 hover:border-green-400 hover:bg-slate-50'
                ]">
                <div v-if="loading" class="flex flex-col items-center py-8">
                    <div class="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mb-4">
                    </div>
                    <p class="text-lg font-semibold text-slate-700">Sedang Menganalisis...</p>
                    <p class="text-sm text-slate-500">AI sedang mengidentifikasi jenis sampahmu</p>
                </div>

                <div v-else class="flex flex-col items-center py-4">
                    <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-4xl mb-6">
                        📸
                    </div>
                    <h3 class="text-xl font-bold text-slate-800 mb-2">Upload Foto Sampah</h3>
                    <p class="text-slate-500 max-w-sm mx-auto mb-6">
                        Klik di sini untuk mengambil foto atau tarik file gambar ke area ini.
                    </p>
                    <span
                        class="bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition">
                        Pilih Gambar
                    </span>
                </div>
            </div>
        </div>

        <div v-else class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden animate-fade-in-up">
            <div class="grid md:grid-cols-2">

                <div class="bg-slate-100 p-6 flex items-center justify-center">
                    <img :src="previewUrl" alt="Sampah" class="rounded-xl max-h-[300px] object-contain shadow-md" />
                </div>

                <div class="p-8 flex flex-col justify-center">
                    <div class="mb-4">
                        <span :class="[
                            'px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide',
                            result.category.toLowerCase().includes('organik') ? 'bg-green-100 text-green-700' :
                                result.category.toLowerCase().includes('b3') ? 'bg-red-100 text-red-700' :
                                    'bg-blue-100 text-blue-700'
                        ]">
                            {{ result.category }}
                        </span>
                    </div>

                    <h2 class="text-3xl font-bold text-slate-800 mb-2">{{ result.item_name }}</h2>

                    <div class="flex items-center gap-2 mb-6 text-sm">
                        <span v-if="result.recyclable" class="flex items-center text-green-600 font-medium">
                            ♻️ Bisa Daur Ulang
                        </span>
                        <span v-else class="flex items-center text-red-500 font-medium">
                            ⛔ Sulit Daur Ulang
                        </span>
                        <span class="text-gray-300">|</span>
                        <span class="text-gray-500">Akurasi: {{ result.confidence_score }}%</span>
                    </div>

                    <div class="space-y-4">
                        <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <h4 class="text-sm font-semibold text-slate-900 mb-1">💡 Saran Pengelolaan</h4>
                            <p class="text-sm text-slate-600">{{ result.disposal_advice }}</p>
                        </div>

                        <div class="bg-yellow-50 p-4 rounded-xl border border-yellow-100">
                            <h4 class="text-sm font-semibold text-yellow-800 mb-1">🤓 Fakta Unik</h4>
                            <p class="text-sm text-yellow-700 italic">"{{ result.fun_fact }}"</p>
                        </div>
                    </div>

                    <button @click="resetScan"
                        class="mt-8 w-full py-3 border border-slate-200 text-slate-600 font-medium rounded-xl hover:bg-slate-50 transition">
                        Scan Sampah Lain
                    </button>
                </div>
            </div>
        </div>

        <div v-if="error" class="mt-6 p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 text-center">
            {{ error }}
            <button @click="error = null" class="underline ml-2">Coba lagi</button>
        </div>

    </div>
</template>

<script setup>
const isDragging = ref(false);
const loading = ref(false);
const error = ref(null);
const result = ref(null); // Menyimpan JSON dari AI
const previewUrl = ref(null); // Preview gambar

// 1. Handle File Selection
const handleFileSelect = (event) => {
    const file = event.target.files[0];
    processFile(file);
};

// 2. Handle Drop File
const handleDrop = (event) => {
    isDragging.value = false;
    const file = event.dataTransfer.files[0];
    processFile(file);
};

// 3. Proses File & Kirim ke API
const processFile = (file) => {
    if (!file) return;

    // Validasi tipe file
    if (!file.type.startsWith('image/')) {
        error.value = 'Mohon upload file gambar (JPG/PNG)';
        return;
    }

    // Tampilkan preview lokal
    previewUrl.value = URL.createObjectURL(file);
    loading.value = true;
    error.value = null;

    // Baca file sebagai Base64
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
        const base64String = reader.result.split(',')[1]; // Ambil string base64 murni

        try {
            // Panggil API Nuxt (server/api/analyze.post.ts)
            const data = await $fetch('/api/analyze', {
                method: 'POST',
                body: { imageBase64: base64String }
            });

            result.value = data; // Simpan hasil JSON dari AI
        } catch (err) {
            console.error(err);
            error.value = 'Maaf, gagal menganalisis gambar. Pastikan koneksi internet lancar.';
        } finally {
            loading.value = false;
        }
    };
};

const resetScan = () => {
    result.value = null;
    previewUrl.value = null;
    error.value = null;
};
</script>

<style scoped>
.animate-fade-in-up {
    animation: fadeInUp 0.5s ease-out;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>