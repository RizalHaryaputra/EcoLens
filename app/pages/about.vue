<template>
    <div class="min-h-screen bg-dark-950 relative overflow-hidden pt-24 pb-12 px-2 lg:px-16">

        <div
            class="absolute top-0 left-0 w-[600px] h-[600px] bg-eco-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/4">
        </div>
        <div
            class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2 translate-x-1/4">
        </div>

        <div class="container mx-auto px-4 relative z-10">

            <div class="text-center max-w-3xl mx-auto mb-20">
                <h1 class="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Mengubah Sampah Menjadi
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-eco-400 to-teal-400">Harapan
                        Baru</span>
                </h1>
                <p class="text-slate-400 text-lg md:text-xl leading-relaxed mx-auto">
                    EcoLens hadir untuk menjembatani kesenjangan antara teknologi kecerdasan buatan dan pelestarian
                    lingkungan. Kami percaya bahwa langkah kecil dalam memilah sampah bisa berdampak besar bagi bumi.
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-12 items-center mb-24">
                <div class="relative group">
                    <div
                        class="absolute inset-0 bg-eco-500/20 rounded-3xl blur-2xl group-hover:bg-eco-500/30 transition-all duration-500">
                    </div>
                    <img src="https://images.unsplash.com/photo-1675395594169-c6b14260e271?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNhdmUlMjBlYXJ0aHxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Misi Lingkungan"
                        class="relative rounded-3xl border border-white/10 shadow-2xl w-full object-cover h-[400px] group-hover:scale-[1.02] transition-transform duration-500" />
                    <div
                        class="absolute -bottom-6 -right-6 bg-dark-900/90 backdrop-blur border border-white/10 p-4 rounded-2xl shadow-xl max-w-xs hidden md:block">
                        <div class="flex items-center gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-eco-500/20 flex items-center justify-center text-eco-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path
                                        d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                                    <path
                                        d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                                </svg>
                            </div>
                            <div>
                                <p class="text-white font-bold text-sm">Eco-Friendly</p>
                                <p class="text-xs text-slate-400">Teknologi untuk Bumi</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 class="text-3xl font-bold text-white mb-6">Kenapa <span class="text-eco-400">EcoLens?</span>
                    </h2>
                    <div class="space-y-6">
                        <div class="flex gap-4">
                            <div
                                class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6 text-eco-400">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>

                            </div>
                            <div>
                                <h3 class="text-white font-bold text-lg">Darurat Sampah</h3>
                                <p class="text-slate-400 text-sm mt-1">Indonesia menghasilkan jutaan ton sampah setiap
                                    tahun. Banyak yang berakhir di laut karena kesalahan pemilahan.</p>
                            </div>
                        </div>

                        <div class="flex gap-4">
                            <div
                                class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-eco-400" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M12 8V4H8" />
                                    <rect width="16" height="12" x="4" y="8" rx="2" />
                                    <path d="M2 14h2" />
                                    <path d="M20 14h2" />
                                    <path d="M15 13v2" />
                                    <path d="M9 13v2" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-white font-bold text-lg">Solusi AI Cerdas</h3>
                                <p class="text-slate-400 text-sm mt-1">Menggunakan Google Gemini AI Vision, kami
                                    membantu Anda mengidentifikasi jenis sampah hanya dalam hitungan detik.</p>
                            </div>
                        </div>

                        <div class="flex gap-4">
                            <div
                                class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6 text-eco-400">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                </svg>

                            </div>
                            <div>
                                <h3 class="text-white font-bold text-lg">Edukasi Tanpa Henti</h3>
                                <p class="text-slate-400 text-sm mt-1">Melalui EcoBot dan artikel terkurasi, kami ingin
                                    menciptakan kebiasaan baru: bijak sebelum membuang.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
                <div v-for="(stat, index) in stats" :key="index"
                    class="bg-dark-900 border border-white/5 p-6 rounded-2xl text-center hover:border-eco-500/30 transition-colors group">
                    <div
                        class="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-eco-400 transition-colors">
                        {{ stat.value }}
                    </div>
                    <div class="text-sm text-slate-400 font-medium uppercase tracking-wider">
                        {{ stat.label }}
                    </div>
                </div>
            </div>

            <div class="mb-32 relative">
                <div
                    class="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 hidden md:block">
                </div>

                <div class="text-center mb-10 relative z-10">
                    <span class="bg-dark-950 px-4 text-slate-400 text-sm font-medium tracking-widest uppercase">Powered
                        By</span>
                </div>

                <div class="flex flex-wrap justify-center gap-6 relative z-10">
                    <div
                        class="bg-dark-900 border border-white/10 px-8 py-4 rounded-full flex items-center gap-4 hover:border-[#00DC82]/50 hover:shadow-[0_0_20px_rgba(0,220,130,0.2)] transition-all group">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg" class="w-8 h-8"
                            alt="Nuxt">
                        <span class="text-white font-bold group-hover:text-[#00DC82] transition-colors">Nuxt 4</span>
                    </div>

                    <div
                        class="bg-dark-900 border border-white/10 px-8 py-4 rounded-full flex items-center gap-4 hover:border-[#38BDF8]/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all group">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                            class="w-8 h-8" alt="Tailwind">
                        <span class="text-white font-bold group-hover:text-[#38BDF8] transition-colors">Tailwind
                            CSS</span>
                    </div>

                    <div
                        class="bg-dark-900 border border-white/10 px-8 py-4 rounded-full flex items-center gap-4 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all group">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Gemini_sparkle_v002.svg/640px-Gemini_sparkle_v002.svg.png"
                            class="w-8 h-8" alt="Gemini AI">
                        <span class="text-white font-bold group-hover:text-blue-400 transition-colors">Gemini AI</span>
                    </div>
                </div>
            </div>

            <div class="max-w-5xl mx-auto mb-24 relative">
                <div
                    class="absolute -inset-4 bg-gradient-to-r from-eco-500/5 to-teal-500/5 rounded-[3rem] blur-xl -z-10">
                </div>
                <div class="absolute top-0 right-0 p-10 opacity-20 pointer-events-none">
                    <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" stroke-width="0.5" />
                        </pattern>
                        <rect width="100" height="100" fill="url(#grid)" class="text-eco-400" />
                    </svg>
                </div>

                <div
                    class="bg-dark-900/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden relative">

                    <div class="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">

                        <div class="shrink-0 relative group">
                            <div
                                class="absolute inset-0 bg-eco-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                            </div>
                            <div
                                class="w-40 h-40 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-br from-eco-400 to-teal-500 relative z-10">
                                <img src="\images\my-photo.jpg" alt="Rizal Haryaputra"
                                    class="w-full h-full rounded-full bg-dark-900 border-4 border-dark-900 object-cover" />
                            </div>
                            <div
                                class="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 bg-dark-950 border border-eco-500/30 text-eco-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-lg">
                                Lead Dev
                            </div>
                        </div>

                        <div class="flex-1 text-center md:text-left">
                            <h2 class="text-3xl md:text-4xl font-bold text-white mb-2">Rizal Haryaputra</h2>
                            <p
                                class="text-lg text-transparent bg-clip-text bg-gradient-to-r from-eco-400 to-teal-400 font-medium mb-6">
                                Fullstack Developer & AI Enthusiast
                            </p>

                            <p class="text-slate-300 leading-relaxed mb-8 max-w-2xl">
                                "Saya percaya bahwa teknologi bukan hanya tentang kode, tapi tentang memecahkan masalah
                                nyata. Dengan EcoLens, saya menggabungkan kecintaan saya pada
                                <span class="text-white font-bold">Web Development</span> (Nuxt/Laravel) dan <span
                                    class="text-white font-bold">Artificial Intelligence</span> untuk membantu
                                menciptakan lingkungan yang lebih bersih."
                            </p>

                            <div class="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
                                <span
                                    class="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-400">Web
                                    Development</span>
                                <span
                                    class="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-400">UI/UX
                                    Design</span>
                                <span
                                    class="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-400">Mobile
                                    Development</span>
                                <span
                                    class="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-400">WordPress</span>
                            </div>

                            <div class="flex justify-center md:justify-start gap-4">
                                <a href="https://github.com/rizalharyaputra" target="_blank"
                                    class="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white text-dark-950 font-bold hover:bg-slate-200 transition-all">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    GitHub
                                </a>
                                <a href="https://rizalharyaputra.vercel.app/" target="_blank"
                                    class="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-white/20 text-white font-medium hover:bg-white/10 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                    Website
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div
                class="mt-24 bg-gradient-to-r from-eco-500/10 to-teal-500/10 border border-eco-500/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                <div
                    class="absolute top-0 right-0 w-64 h-64 bg-eco-500/20 rounded-full blur-[80px] pointer-events-none">
                </div>
                <h2 class="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">Siap Menjadi Bagian dari
                    Solusi?</h2>
                <p class="text-slate-300 mb-8 max-w-xl mx-auto relative z-10">
                    Mulailah perjalanan gaya hidup minim sampah Anda hari ini dengan bantuan teknologi AI kami.
                </p>
                <NuxtLink to="detection"
                    class="relative z-10 inline-block px-8 py-3 bg-eco-500 text-dark-950 font-bold rounded-full hover:bg-eco-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                    Coba Deteksi Sampah Sekarang
                </NuxtLink>
            </div>

        </div>
    </div>
</template>

<script setup>
// Data Statistik Dummy
const stats = [
    { value: '98%', label: 'Akurasi AI' },
    { value: '500+', label: 'Jenis Sampah' },
    { value: '1K+', label: 'Pengguna Aktif' },
    { value: '24/7', label: 'Edukasi Bot' }
];

useSeoMeta({
    title: 'Tentang Kami - Misi & Teknologi di Balik EcoLens',
    ogTitle: 'Mengenal EcoLens: Solusi Cerdas untuk Bumi yang Lebih Hijau',
    description: 'Pelajari visi EcoLens dalam mengatasi krisis sampah melalui teknologi Gemini AI. Dibuat dengan dedikasi untuk mengedukasi masyarakat tentang pemilahan sampah yang benar.',
    ogDescription: 'Pelajari visi EcoLens dalam mengatasi krisis sampah melalui teknologi Gemini AI. Dibuat dengan dedikasi untuk mengedukasi masyarakat.',
    twitterCard: 'summary_large_image',
})
</script>