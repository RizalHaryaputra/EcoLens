<template>
    <div class="w-full max-w-4xl mx-auto">

        <div v-if="!result" class="relative">

            <div v-if="!showCamera">
                <input type="file" ref="fileInput" accept="image/*" class="hidden" @change="handleFileSelect" />

                <div @dragover.prevent="isDragging = true" @dragleave.prevent="isDragging = false"
                    @drop.prevent="handleDrop" :class="[
                        'border-2 border-dashed rounded-3xl p-12 text-center transition-all duration-300 ease-in-out relative overflow-hidden group',
                        isDragging
                            ? 'border-eco-500 bg-eco-500/10 scale-[1.02]'
                            : 'border-white/10 bg-white/5 hover:border-eco-500/50 hover:bg-dark-900'
                    ]">
                    <div v-if="loading" class="flex flex-col items-center py-8 relative z-10">
                        <div class="relative w-20 h-20 mb-6">
                            <div class="absolute inset-0 border-4 border-eco-500/30 rounded-full animate-ping"></div>
                            <div
                                class="absolute inset-0 border-4 border-t-eco-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin">
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-2">Menganalisis Sampah...</h3>
                        <p class="text-slate-400">AI sedang mengidentifikasi objek dalam gambar</p>
                    </div>

                    <div v-else class="flex flex-col items-center py-4 relative z-10">
                        <div
                            class="w-24 h-24 bg-dark-950 rounded-full flex items-center justify-center mb-6 shadow-2xl border border-white/5 group-hover:scale-110 group-hover:border-eco-500/50 transition-all duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-eco-400" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="17 8 12 3 7 8" />
                                <line x1="12" x2="12" y1="3" y2="15" />
                            </svg>
                        </div>

                        <h3 class="text-2xl font-bold text-white mb-3">Upload Foto Sampah</h3>
                        <p class="text-slate-400 max-w-sm mx-auto mb-8">
                            Tarik file ke sini atau pilih metode di bawah
                        </p>

                        <div class="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            <button @click="$refs.fileInput.click()"
                                class="px-6 py-3 bg-dark-950 border border-white/10 text-white rounded-xl font-medium hover:bg-white/5 hover:border-eco-500/50 transition-all flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="17 8 12 3 7 8" />
                                    <line x1="12" x2="12" y1="3" y2="15" />
                                </svg>
                                Pilih Galeri
                            </button>

                            <button @click="startCamera"
                                class="px-6 py-3 bg-eco-500 text-dark-950 rounded-xl font-bold hover:bg-eco-400 shadow-lg shadow-eco-500/20 transition-all flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path
                                        d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                                    <circle cx="12" cy="13" r="4" />
                                </svg>
                                Buka Kamera
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else class="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
                <button @click="stopCamera"
                    class="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-red-500/20 hover:text-red-400 transition z-50">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div
                    class="relative w-full max-w-3xl aspect-[3/4] md:aspect-[4/3] bg-black overflow-hidden rounded-none md:rounded-3xl border border-white/10 shadow-2xl">
                    <video ref="videoRef" autoplay playsinline class="w-full h-full object-cover"></video>

                    <div class="absolute inset-0 border-[30px] border-black/50 pointer-events-none"></div>
                    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div class="w-64 h-64 border-2 border-eco-400/50 rounded-2xl relative">
                            <div
                                class="absolute top-0 left-0 w-full h-1 bg-eco-500 shadow-[0_0_20px_#4ade80] animate-scan-fast">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="absolute bottom-10 left-0 w-full flex justify-center items-center gap-8">
                    <button @click="capturePhoto"
                        class="w-20 h-20 bg-white rounded-full border-4 border-gray-300 hover:border-eco-500 hover:scale-105 transition-all shadow-xl flex items-center justify-center group">
                        <div class="w-16 h-16 bg-white rounded-full border-2 border-black group-hover:bg-eco-50"></div>
                    </button>
                </div>
            </div>

        </div>

        <div v-else class="bg-dark-900 rounded-3xl border border-white/5 overflow-hidden animate-fade-in-up shadow-2xl">
            <div class="grid md:grid-cols-2">

                <div class="bg-dark-950 p-8 flex items-center justify-center relative group">
                    <div :class="[
                        'absolute inset-0 transition-colors',
                        result.is_waste ? 'bg-eco-500/5 group-hover:bg-eco-500/10' : 'bg-red-500/5 group-hover:bg-red-500/10'
                    ]"></div>

                    <img :src="previewUrl" alt="Sampah"
                        class="relative z-10 rounded-2xl max-h-[400px] w-full object-contain shadow-2xl border border-white/10" />
                </div>

                <div class="p-8 md:p-12 flex flex-col justify-center">

                    <div v-if="result.is_waste">
                        <div class="mb-6">
                            <span class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Hasil
                                Deteksi</span>
                            <h2 class="text-4xl font-bold text-white mb-2">{{ result.item_name }}</h2>
                            <div class="flex flex-wrap gap-2 mt-3">
                                <span
                                    class="px-3 py-1 rounded-full text-xs font-bold bg-eco-500/20 text-eco-400 border border-eco-500/20 tracking-wide">
                                    {{ result.category }}
                                </span>
                                <span v-if="result.recyclable"
                                    class="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-400 border border-blue-500/20 flex items-center gap-1">
                                    Bisa Daur Ulang
                                </span>
                                <span v-else
                                    class="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/20">
                                    Sulit Daur Ulang
                                </span>
                            </div>
                        </div>

                        <div class="space-y-4 mb-8">
                            <div class="bg-dark-950 p-5 rounded-2xl border border-white/5">
                                <h4 class="text-sm font-bold text-white mb-2 flex items-center gap-2">
                                    <!-- <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" y1="15" x2="12" y2="3" />
                                    </svg> -->
                                    Saran Pengelolaan:
                                </h4>
                                <p class="text-slate-400 text-sm leading-relaxed">{{ result.disposal_advice }}</p>
                            </div>

                            <div class="bg-dark-950 p-5 rounded-2xl border border-white/5">
                                <h4 class="text-sm font-bold text-white mb-2 flex items-center gap-2">
                                    Fakta Unik:
                                </h4>
                                <p class="text-slate-400 text-sm italic">"{{ result.fun_fact }}"</p>
                            </div>
                        </div>
                    </div>

                    <div v-else>
                        <div class="mb-6">
                            <div
                                class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-bold tracking-wide mb-4">
                                Bukan Sampah
                            </div>
                            <h2 class="text-3xl font-bold text-white mb-4">Objek Tidak Valid</h2>
                            <p class="text-slate-300 text-lg leading-relaxed">
                                {{ result.refusal_reason }}
                            </p>
                        </div>

                        <div class="bg-dark-950 p-6 rounded-2xl border border-white/5 mb-8">
                            <h4 class="text-white font-bold mb-3">Tips Deteksi:</h4>
                            <ul class="text-slate-400 text-sm space-y-2 list-disc pl-4">
                                <li>Pastikan hanya objek sampah yang difoto.</li>
                                <li>Hindari memfoto wajah manusia atau hewan.</li>
                                <li>Dekatkan kamera ke objek agar latar belakang tidak terdeteksi.</li>
                            </ul>
                        </div>
                    </div>

                    <button @click="resetScan"
                        class="w-full py-4 border border-white/10 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 hover:text-eco-400 hover:border-eco-500/30 transition-all flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="1 4 1 10 7 10" />
                            <polyline points="23 20 23 14 17 14" />
                            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
                        </svg>
                        Scan Ulang
                    </button>
                </div>
            </div>
        </div>

        <div v-if="error"
            class="mt-6 p-4 bg-red-500/10 text-red-400 rounded-xl border border-red-500/20 text-center animate-pulse">
            {{ error }}
            <button @click="error = null" class="underline ml-2 hover:text-white">Coba lagi</button>
        </div>

    </div>
</template>

<script setup>
const isDragging = ref(false);
const loading = ref(false);
const error = ref(null);
const result = ref(null);
const previewUrl = ref(null);

// === LOGIKA KAMERA ===
const showCamera = ref(false);
const videoRef = ref(null);
const streamRef = ref(null);

// 1. Mulai Kamera
const startCamera = async () => {
    try {
        showCamera.value = true;
        // Minta akses kamera (prefer kamera belakang 'environment' untuk HP)
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment' }
        });

        streamRef.value = stream;
        // Tunggu DOM update agar videoRef tersedia
        await nextTick();
        if (videoRef.value) {
            videoRef.value.srcObject = stream;
        }
    } catch (err) {
        console.error("Camera Error:", err);
        error.value = "Gagal mengakses kamera. Pastikan izin diberikan.";
        showCamera.value = false;
    }
};

// 2. Stop Kamera
const stopCamera = () => {
    if (streamRef.value) {
        streamRef.value.getTracks().forEach(track => track.stop());
        streamRef.value = null;
    }
    showCamera.value = false;
};

// 3. Ambil Foto (Capture)
const capturePhoto = () => {
    if (!videoRef.value) return;

    const canvas = document.createElement('canvas');
    canvas.width = videoRef.value.videoWidth;
    canvas.height = videoRef.value.videoHeight;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoRef.value, 0, 0, canvas.width, canvas.height);

    // Convert ke Blob/File agar sama dengan logika upload biasa
    canvas.toBlob((blob) => {
        const file = new File([blob], "camera-capture.jpg", { type: "image/jpeg" });
        stopCamera(); // Tutup kamera
        processFile(file); // Proses seperti file biasa
    }, 'image/jpeg', 0.85);
};

// === LOGIKA UPLOAD BIASA ===

const handleFileSelect = (event) => {
    const file = event.target.files[0];
    processFile(file);
};

const handleDrop = (event) => {
    isDragging.value = false;
    const file = event.dataTransfer.files[0];
    processFile(file);
};

// Fungsi Utama Pemrosesan (Digunakan oleh Kamera & Upload)
const processFile = (file) => {
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        error.value = 'Mohon upload file gambar (JPG/PNG)';
        return;
    }

    // Preview Image
    previewUrl.value = URL.createObjectURL(file);
    loading.value = true;
    error.value = null;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
        const base64String = reader.result.split(',')[1];

        try {
            const data = await $fetch('/api/analyze', {
                method: 'POST',
                body: { imageBase64: base64String }
            });
            result.value = data;
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
    animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
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

@keyframes scanFast {
    0% {
        top: 0%;
        opacity: 0.5;
    }

    50% {
        opacity: 1;
    }

    100% {
        top: 100%;
        opacity: 0.5;
    }
}

.animate-scan-fast {
    animation: scanFast 2s linear infinite;
}
</style>