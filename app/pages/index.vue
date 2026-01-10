<script setup>
useSeoMeta({
    title: 'Beranda',
    ogTitle: 'EcoLens - Deteksi Sampah dengan AI',
    description: 'Ubah cara kamu memilah sampah dengan kecerdasan buatan. Scan sampahmu sekarang dan selamatkan bumi!',
    ogDescription: 'Ubah cara kamu memilah sampah dengan kecerdasan buatan. Scan sampahmu sekarang dan selamatkan bumi!',
    ogImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2F2ZSUyMGVhcnRofGVufDB8fDB8fHww', 
    twitterCard: 'summary_large_image',
})

useHead({
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebApplication",
                "name": "EcoLens",
                "url": "https://www.ecolens.my.id/",
                "description": "Aplikasi AI untuk mendeteksi dan memilah jenis sampah.",
                "applicationCategory": "UtilitiesApplication",
                "operatingSystem": "All",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "IDR"
                }
            })
        }
    ]
})

const steps = [
    {
        title: "1. Foto & Upload",
        description: "Ambil foto sampah di sekitarmu atau upload gambar dari galeri. Sistem kami menerima berbagai format gambar.",
        iconContent: `
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
        `
    },
    {
        title: "2. Analisis AI",
        description: "Gemini AI akan memindai gambar, mengenali material (plastik, kertas, B3), dan menentukan kategori sampah.",
        iconContent: `
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        `
    },
    {
        title: "3. Solusi & Edukasi",
        description: "Dapatkan panduan cara mengolahnya, info nilai jual, dan artikel edukasi terkait dampak lingkungannya.",
        iconContent: `
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.77 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        `
    }
];

const features = [
    {
        title: "Deteksi Sampah AI",
        description: "Teknologi Computer Vision yang mampu mengenali berbagai jenis limbah rumah tangga secara instan.",
        iconContent: `
        <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
    `
    },
    {
        title: "Chatbot Interaktif",
        description: "Asisten virtual pintar yang siap menjawab pertanyaanmu seputar daur ulang dan isu lingkungan 24/7.",
        iconContent: `
        <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
        <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
    `
    },
    {
        title: "Artikel Edukasi",
        description: "Kumpulan artikel dan panduan praktis untuk meningkatkan wawasan tentang pelestarian alam.",
        iconContent: `
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    `
    },
    {
        title: "Sistem Klasifikasi",
        description: "Pengelompokan otomatis (Organik, Anorganik, B3) untuk memudahkan proses pemilahan sampah.",
        iconContent: `
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
    `
    }
];

const { articles: allArticles } = useArticles();
const articles = computed(() => allArticles.slice(0, 3));
</script>

<template>
    <div class="relative overflow-hidden">
        <!-- Hero Section -->
        <section class="relative pt-12 pb-20 lg:pt-16 lg:pb-32 px-2 lg:px-16">

            <div
                class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-eco-500/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none">
            </div>
            <div
                class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-eco-500/10 rounded-full blur-[100px] -z-10 pointer-events-none">
            </div>

            <div class="container mx-auto px-6">
                <div class="grid lg:grid-cols-2 gap-12 items-center">

                    <div class="text-center lg:text-left">
                        <div
                            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-eco-400 text-xs font-semibold mb-6 backdrop-blur-md">
                            <span class="relative flex h-2 w-2">
                                <span
                                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-eco-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-eco-500"></span>
                            </span>
                            AI Powered Waste Detection
                        </div>

                        <h1 class="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-6">
                            Kelola Sampah <br />
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-eco-400 to-teal-400">
                                Lebih Cerdas.
                            </span>
                        </h1>

                        <p class="text-lg text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            EcoLens menggunakan kecerdasan buatan untuk mengidentifikasi jenis sampahmu dalam hitungan
                            detik. Scan, pilah, dan jaga bumi kita tetap hijau.
                        </p>

                        <div class="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">

                            <NuxtLink to="/detection"
                                class="w-full sm:w-auto px-8 py-4 bg-eco-500 hover:bg-eco-400 text-dark-950 font-bold rounded-2xl shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all transform">
                                Mulai Scan Sekarang
                            </NuxtLink>

                            <NuxtLink to="/blog"
                                class="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-2xl hover:bg-white/10 backdrop-blur-md transition-all">
                                Pelajari Daur Ulang
                            </NuxtLink>
                        </div>

                        <!-- <div
                            class="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center gap-4 text-slate-500 text-sm justify-center lg:justify-start">
                            <span>Didukung teknologi dari:</span>
                            <div
                                class="flex items-center gap-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                                <span class="font-bold text-white flex items-center gap-2">
                                    Google Gemini
                                </span>
                                <span class="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                                <span class="font-bold text-white">Nuxt 3</span>
                            </div>
                        </div> -->
                    </div>

                    <div class="relative hidden lg:block">
                        <div
                            class="absolute inset-0 bg-gradient-to-tr from-eco-500/20 to-transparent rounded-full blur-3xl">
                        </div>

                        <div class="relative z-10 animate-float">
                            <div
                                class="bg-dark-900/40 border border-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl relative">
                                <div class="flex items-center justify-between mb-6">
                                    <div class="flex items-center gap-2">
                                        <div class="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div class="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div class="text-xs text-slate-500 font-mono">ecolens_ai_core.exe</div>
                                </div>

                                <div
                                    class="relative rounded-xl overflow-hidden aspect-[4/3] bg-dark-950/50 border border-white/5 group">
                                    <div
                                        class="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:20px_20px]">
                                    </div>

                                    <div
                                        class="absolute top-0 left-0 w-full h-1 bg-eco-500/50 shadow-[0_0_15px_#22c55e] animate-scan">
                                    </div>

                                    <div class="absolute inset-0 flex items-center justify-center">
                                        <div class="absolute inset-0 flex items-center justify-center">

                                            <div
                                                class="absolute w-64 h-64 rounded-full border border-eco-500/20 border-dashed animate-[spin_10s_linear_infinite]">
                                            </div>

                                            <div
                                                class="absolute w-48 h-48 rounded-full border-2 border-t-eco-500/50 border-r-transparent border-b-eco-500/10 border-l-transparent animate-[spin_3s_linear_infinite_reverse]">
                                            </div>

                                            <div
                                                class="relative flex items-center justify-center w-36 h-36 bg-eco-500/10 rounded-full backdrop-blur-sm shadow-[0_0_30px_rgba(34,197,94,0.3)] animate-pulse">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor"
                                                    class="w-12 h-12 text-eco-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                </svg>

                                            </div>

                                            <div
                                                class="absolute w-32 h-32 border-2 border-white/20 rounded-lg scale-150 opacity-50">
                                            </div>
                                            <div
                                                class="absolute w-42 h-42 border border-eco-500/30 rounded-lg scale-125 opacity-30">
                                            </div>

                                        </div>
                                    </div>

                                    <div
                                        class="absolute bottom-4 right-4 bg-dark-900/90 backdrop-blur border border-eco-500/30 px-4 py-2 rounded-lg shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <div class="flex items-center gap-2">
                                            <span class="w-2 h-2 rounded-full bg-eco-500 animate-pulse"></span>
                                            <span class="text-xs font-bold text-eco-400">PET Plastic Detected</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                class="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-dark-800/30 rounded-3xl border border-white/5 backdrop-blur-sm">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- How It Works Section -->
        <section class="py-24 bg-dark-950 relative px-2 lg:px-16">

            <div
                class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20">
            </div>

            <div class="container mx-auto px-6 relative z-10">
                <div class="text-center max-w-2xl mx-auto mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                        Cara Kerja <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-eco-400 to-teal-400">EcoLens</span>
                    </h2>
                    <p class="text-slate-400">
                        Teknologi canggih yang kami sederhanakan. Cukup 3 langkah mudah untuk berpartisipasi menjaga
                        lingkungan.
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <StepCard v-for="(step, index) in steps" :key="index" :title="step.title"
                        :description="step.description">
                        <template #icon>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-eco-400" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" v-html="step.iconContent">
                            </svg>
                        </template>
                    </StepCard>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="py-24 bg-dark-950 relative px-2 lg:px-16">
            <div
                class="absolute -top-0 -left-80 w-[1000px] h-[500px] bg-eco-500/20 opacity-75 rounded-[100%] blur-[100px] pointer-events-none z-0">
            </div>
            <div class="container mx-auto px-6 z-10 relative">
                <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div class="max-w-xl text-center md:text-left">
                        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                            Fitur Lengkap untuk <br />
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-eco-400 to-teal-400">Gaya
                                Hidup Hijau</span>
                        </h2>
                        <p class="text-slate-400">
                            Lebih dari sekadar alat deteksi. EcoLens adalah ekosistem digital untuk membantu Anda
                            memahami dan mengelola limbah dengan lebih baik.
                        </p>
                    </div>
                    <div
                        class="hidden md:block h-px flex-grow bg-gradient-to-r from-eco-500/50 to-transparent ml-12 mb-8">
                    </div>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <FeatureCard v-for="(feature, index) in features" :key="index" :title="feature.title"
                        :description="feature.description">
                        <template #icon>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-eco-400" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" v-html="feature.iconContent">
                            </svg>
                        </template>
                    </FeatureCard>
                </div>
            </div>
        </section>

        <!-- Article Section -->
        <section class="py-24 bg-dark-950 relative px-2 lg:px-16">
            <div
                class="absolute top-0 -right-80 w-[800px] h-[500px] bg-eco-500/20 opacity-75 rounded-[100%] blur-[100px] pointer-events-none z-0">
            </div>
            <div class="container mx-auto px-6">

                <div class="text-center max-w-2xl mx-auto mb-16">
                    <div>
                        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                            Wawasan <span
                                class="text-transparent bg-clip-text bg-gradient-to-r from-eco-400 to-teal-400">Lingkungan</span>
                        </h2>
                        <p class="text-slate-400">
                            Perluas pengetahuanmu tentang pelestarian alam melalui artikel pilihan yang kami kurasi
                            khusus untukmu.
                        </p>
                    </div>
                </div>

                <div class="grid md:grid-cols-3 gap-8">

                    <ArticleCard v-for="(article, index) in articles" :key="index" :slug="article.slug"
                        :image="article.image" :category="article.category" :date="article.date"
                        :readTime="article.readTime" :title="article.title" :description="article.description"
                        :link="article.link" :accent-color="article.accentColor" :hover-color="article.hoverColor" />

                </div>

                <div class="mt-12 text-center w-full">
                    <NuxtLink to="/blog"
                        class="block md:inline w-full sm:w-auto px-8 py-5 bg-eco-500 hover:bg-eco-400 text-dark-950 font-bold rounded-2xl shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all transform">
                        Lihat Semua Artikel
                    </NuxtLink>
                </div>

            </div>
        </section>

        <!-- Chatbot Preview Section -->
        <section class="py-24 px-2 lg:px-16 bg-dark-950 relative">
            <div
                class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-eco-500/20 opacity-75 rounded-[100%] blur-[100px] pointer-events-none z-0">
            </div>

            <div
                class="absolute right-0 bottom-0 w-[500px] h-[500px] bg-eco-500/5 rounded-full blur-[120px] pointer-events-none">
            </div>

            <div class="container mx-auto px-6">
                <div class="grid lg:grid-cols-2 gap-16 items-center">

                    <div class="relative group">
                        <div
                            class="absolute -inset-1 bg-gradient-to-r from-eco-500 to-teal-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000">
                        </div>

                        <div class="relative bg-dark-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">

                            <div
                                class="flex items-center justify-between px-6 py-4 bg-dark-950 border-b border-white/5">
                                <div class="flex items-center gap-3">
                                    <div class="relative">
                                        <div
                                            class="w-10 h-10 rounded-full bg-eco-500/20 flex items-center justify-center border border-eco-500/30">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-eco-400"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M12 8V4H8" />
                                                <rect width="16" height="12" x="4" y="8" rx="2" />
                                                <path d="M2 14h2" />
                                                <path d="M20 14h2" />
                                                <path d="M15 13v2" />
                                                <path d="M9 13v2" />
                                            </svg>
                                        </div>
                                        <!-- <div
                                            class="absolute bottom-0 right-0 w-3 h-3 bg-eco-500 rounded-full border-2 border-dark-900">
                                        </div> -->
                                    </div>
                                    <div>
                                        <h4 class="text-white font-bold text-sm">EcoBot AI</h4>
                                        <p class="text-xs text-eco-400 flex items-center gap-1">
                                            <span class="w-2 h-2 bg-eco-500 rounded-full animate-pulse"></span> Online
                                        </p>
                                    </div>
                                </div>
                                <div class="flex gap-2">
                                    <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                    <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
                                </div>
                            </div>

                            <div class="p-6 space-y-6 min-h-[300px] bg-dark-950/50">

                                <div class="flex justify-end">
                                    <div
                                        class="bg-white/10 text-white px-5 py-3 rounded-2xl rounded-tr-none max-w-[80%] border border-white/5">
                                        <p class="text-sm">Botol plastik ini jenis apa ya? Bisa didaur ulang?</p>
                                    </div>
                                </div>

                                <div class="flex justify-start gap-3">
                                    <!-- <div
                                        class="w-8 h-8 rounded-full bg-eco-500/20 flex-shrink-0 flex items-center justify-center border border-eco-500/30 mt-1">
                                        <span class="text-xs">🤖</span>
                                    </div> -->
                                    <div
                                        class="bg-eco-500/10 text-eco-100 px-5 py-3 rounded-2xl rounded-tl-none max-w-[85%] border border-eco-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                                        <p class="text-sm leading-relaxed">
                                            Itu adalah botol <strong class="text-eco-400">PET (Jenis 1)</strong>. Sangat
                                            bisa didaur ulang! ♻️
                                            <br><br>
                                            Pastikan kamu membuang tutupnya secara terpisah dan remukkan botolnya untuk
                                            menghemat tempat ya.
                                        </p>
                                    </div>
                                </div>

                                <div class="flex justify-start gap-3">

                                    <div
                                        class="bg-dark-900 border border-white/5 px-4 py-3 rounded-2xl rounded-tl-none">
                                        <div class="flex gap-1">
                                            <span class="w-2 h-2 bg-eco-500/50 rounded-full animate-bounce"></span>
                                            <span
                                                class="w-2 h-2 bg-eco-500/50 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                            <span
                                                class="w-2 h-2 bg-eco-500/50 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="p-4 bg-dark-950 border-t border-white/5">
                                <div class="flex gap-3">
                                    <div
                                        class="flex-grow bg-dark-900 border border-white/10 rounded-xl h-11 px-4 flex items-center text-slate-500 text-sm">
                                        Tanya soal sampah...
                                    </div>
                                    <div
                                        class="w-11 h-11 rounded-xl bg-eco-500 flex items-center justify-center text-dark-950 shadow-lg shadow-eco-500/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="text-left">
                        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
                            Tanya Jawab dengan <br />
                            <span
                                class="text-transparent bg-clip-text bg-gradient-to-r from-eco-400 to-teal-400">Asisten
                                AI Cerdas</span>
                        </h2>

                        <p class="text-slate-400 text-lg mb-8 leading-relaxed">
                            Bingung membedakan jenis plastik? Atau ingin tahu lokasi bank sampah terdekat?
                            <strong class="text-white">EcoBot</strong> siap menjawab pertanyaanmu kapan saja dengan data
                            yang akurat.
                        </p>

                        <ul class="space-y-4 mb-10">
                            <li class="flex items-center gap-3 text-slate-300">
                                <div
                                    class="w-6 h-6 rounded-full bg-eco-500/20 flex items-center justify-center text-eco-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                </div>
                                <span>Identifikasi instan dari teks atau gambar</span>
                            </li>
                            <li class="flex items-center gap-3 text-slate-300">
                                <div
                                    class="w-6 h-6 rounded-full bg-eco-500/20 flex items-center justify-center text-eco-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                </div>
                                <span>Tersedia 24/7 tanpa henti</span>
                            </li>
                            <li class="flex items-center gap-3 text-slate-300">
                                <div
                                    class="w-6 h-6 rounded-full bg-eco-500/20 flex items-center justify-center text-eco-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                </div>
                                <span>Saran daur ulang yang personal</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-24 px-4 lg:px-16 relative overflow-hidden">
            <div class="container mx-auto px-6 relative z-10">

                <div
                    class="relative rounded-3xl overflow-hidden bg-dark-950/50 border border-eco-600 border-opacity-40 p-10 md:p-20 text-center">

                    <div
                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-eco-600/60 via-eco-500/60 to-teal-500/50 rounded-full blur-[120px] opacity-80 -z-0">
                    </div>

                    <div class="relative z-10">
                        <h2 class="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-tight">
                            Mulai Buat Perubahan Nyata <br class="hidden md:block" />
                            dengan Bantuan AI.
                        </h2>

                        <NuxtLink to="/detection"
                            class="group inline-flex items-center justify-center px-10 py-4 text-md md:text-lg font-bold text-white bg-gradient-to-r from-eco-500 to-teal-500 rounded-full shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-all duration-300 hover:scale-105">
                            <span class="flex items-center gap-3">
                                Scan Sekarang
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="w-6 h-6 group-hover:translate-x-1 transition-transform hidden md:block"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </span>
                        </NuxtLink>
                    </div>

                </div>
            </div>
        </section>

    </div>
</template>

<style scoped>
/* Animasi Scan Garis Hijau */
@keyframes scan {
    0% {
        top: 0%;
        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    100% {
        top: 100%;
        opacity: 0;
    }
}

.animate-scan {
    animation: scan 3s linear infinite;
}

/* Animasi Floating (Melayang) */
@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}
</style>