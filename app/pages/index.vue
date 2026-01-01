<template>
    <div>
        <section class="relative py-20 lg:py-32 overflow-hidden">
            <div
                class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-200 rounded-full blur-3xl opacity-20 -z-10">
            </div>

            <div class="container mx-auto px-4 text-center">
                <div
                    class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold mb-6 border border-green-100">
                    ✨ Powered by Google Gemini AI
                </div>

                <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                    Kenali Sampahmu, <br />
                    <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Selamatkan
                        Lingkungan</span>
                </h1>

                <p class="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
                    Bingung cara memilah sampah? Upload foto sampahmu, dan biarkan AI kami memberitahu jenisnya, cara
                    daur ulangnya, hingga nilai ekonomisnya.
                </p>

                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button @click="scrollToScan"
                        class="px-8 py-3 bg-green-600 text-white rounded-xl font-semibold shadow-lg shadow-green-600/20 hover:bg-green-700 hover:-translate-y-1 transition-all">
                        Mulai Scan Sekarang
                    </button>
                    <NuxtLink to="/blog"
                        class="px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition">
                        Pelajari Daur Ulang
                    </NuxtLink>
                </div>
            </div>
        </section>

        <section id="scan-area" class="py-20 bg-slate-50">
            <div class="container mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-slate-900 mb-4">Coba Deteksi Sekarang</h2>
                    <p class="text-slate-600">Teknologi AI kami siap membantu memilah sampahmu.</p>
                </div>

                <WasteScanner />

            </div>
        </section>
    </div>
</template>

<script setup>
const scrollToScan = () => {
    const el = document.getElementById('scan-area');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
};
</script>