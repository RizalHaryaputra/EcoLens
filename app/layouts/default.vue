<template>
    <div class="flex flex-col min-h-screen selection:bg-eco-500/30 selection:text-eco-400">

        <header
            class="fixed lg:px-16 top-0 w-full z-50 transition-all duration-300 border-b border-eco-600 border-opacity-30 bg-dark-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-dark-950/60">
            <div class="container mx-auto px-6 h-20 flex items-center justify-between">

                <NuxtLink to="/" class="flex items-center gap-3 group">
                    <div
                        class="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-eco-600 to-eco-400 shadow-[0_0_15px_rgba(74,222,128,0.3)] group-hover:shadow-[0_0_25px_rgba(74,222,128,0.5)] transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-dark-950" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M7 20h10" />
                            <path d="M10 20c5.5-2.5.8-6.4 3-10" />
                            <path
                                d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.2.4-4.8-.3-1.1-.6-2.3-1.9-3.3-2.4 1.9-3.2 2.6-7.9 2.8-10.4 2.5 0 7.1.6 10.2 2.9-.4 1-.6 2-.6 3.3 0 2.4.1 4.3 1 6.4 1 2.3 2.4 2 2.4 2 1.4 3.2.3 7.5-5 10.4-3.5 1.9-7.3 1.9-7.3 1.9z" />
                        </svg>
                    </div>
                    <span
                        class="text-xl font-bold tracking-tight text-white group-hover:text-eco-400 transition-colors">
                        EcoLens
                    </span>
                </NuxtLink>

                <nav class="hidden md:flex items-center gap-8">
                    <NuxtLink to="/" class="text-sm font-medium text-slate-400 hover:text-eco-400 transition-colors">
                        Beranda</NuxtLink>
                    <NuxtLink to="/detection"
                        class="text-sm font-medium text-slate-400 hover:text-eco-400 transition-colors">Deteksi Sampah
                    </NuxtLink>
                    <NuxtLink to="/blog"
                        class="text-sm font-medium text-slate-400 hover:text-eco-400 transition-colors">Edukasi
                    </NuxtLink>
                </nav>

                <button
                    class="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-eco-500/50 text-sm font-medium text-white transition-all duration-300 group">
                    <span>Mulai Sekarang</span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4 text-eco-400 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </button>
            </div>
        </header>

        <main class="flex-grow pt-20">
            <slot />
        </main>

        <footer class="border-t border-white/5 bg-dark-900/50 py-12">
            <div class="container mx-auto px-6 text-center">
                <p class="text-slate-500 text-sm mb-4">© 2025 EcoLens AI. Teknologi Hijau untuk Masa Depan.</p>
                <div class="flex justify-center gap-6">
                    <a href="#" class="text-slate-600 hover:text-eco-400 transition">Instagram</a>
                    <a href="#" class="text-slate-600 hover:text-eco-400 transition">GitHub</a>
                </div>
            </div>
        </footer>

    </div>
</template>

<style scoped>
/* Aktif link style (Otomatis dari Nuxt) */
.router-link-active {
    color: #4ade80;
    /* eco-400 */
}
</style>