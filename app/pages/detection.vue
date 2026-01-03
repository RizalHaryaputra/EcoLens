<template>
    <div class="min-h-screen bg-dark-950 relative overflow-hidden pt-24 pb-12">

        <div
            class="absolute top-0 left-0 w-[500px] h-[500px] bg-eco-500/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2">
        </div>
        <div
            class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2">
        </div>
        <div
            class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none">
        </div>

        <div class="container mx-auto px-4 relative z-10">

            <div class="text-center max-w-2xl mx-auto mb-12">
                <div
                    class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-eco-400 text-xs font-semibold mb-6 backdrop-blur-md">
                    <span class="relative flex h-2 w-2">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-eco-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-eco-500"></span>
                    </span>
                    System Ready
                </div>

                <h1 class="text-3xl md:text-5xl font-bold text-white mb-6">
                    AI Waste <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-eco-400 to-teal-400">Scanner</span>
                </h1>
                <p class="text-slate-400 text-lg">
                    Arahkan kamera ke objek sampah atau upload foto dari galerimu. Biarkan AI kami menganalisis jenis
                    dan cara pengelolaannya.
                </p>
            </div>

            <div class="mb-16">
                <WasteScanner />
            </div>

            <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto border-t border-white/5 py-12">
                <div
                    class="text-center border p-4 rounded-xl border-white/10 bg-white/5 hover:border-eco-500/50 hover:bg-dark-900 hover:scale-105 transition-all duration-300">
                    <div
                        class="w-10 h-10 mx-auto bg-dark-900 rounded-full flex items-center justify-center text-xl mb-3 border border-white/10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6 text-eco-400">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                    </div>
                    <h4 class="text-white font-bold text-sm mb-1">Pencahayaan Cukup</h4>
                    <p class="text-slate-500 text-xs">Pastikan objek terlihat jelas dan tidak terlalu gelap.</p>
                </div>
                <div
                    class="text-center border p-4 rounded-xl border-white/10 bg-white/5 hover:border-eco-500/50 hover:bg-dark-900 hover:scale-105 transition-all duration-300">
                    <div
                        class="w-10 h-10 mx-auto bg-dark-900 rounded-full flex items-center justify-center text-xl mb-3 border border-white/10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6 text-eco-400">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>
                    <h4 class="text-white font-bold text-sm mb-1">Satu Objek</h4>
                    <p class="text-slate-500 text-xs">Fokus pada satu jenis sampah agar deteksi lebih akurat.</p>
                </div>
                <div
                    class="text-center border p-4 rounded-xl border-white/10 bg-white/5 hover:border-eco-500/50 hover:bg-dark-900 hover:scale-105 transition-all duration-300">
                    <div
                        class="w-10 h-10 mx-auto bg-dark-900 rounded-full flex items-center justify-center text-xl mb-3 border border-white/10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6 text-eco-400">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>

                    </div>
                    <h4 class="text-white font-bold text-sm mb-1">Koneksi Internet</h4>
                    <p class="text-slate-500 text-xs">Pastikan perangkatmu terhubung ke internet stabil.</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
// Mengatur Title Halaman agar muncul di Tab Browser
useHead({
    title: 'Deteksi Sampah - EcoLens AI',
    meta: [
        { name: 'description', content: 'Scan sampahmu menggunakan AI dan dapatkan solusi daur ulang.' }
    ]
})
</script>