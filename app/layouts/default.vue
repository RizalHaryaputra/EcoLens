<template>
    <div class="flex flex-col min-h-screen selection:bg-eco-500/30 selection:text-eco-400 font-sans">

        <Transition name="fade">
            <div v-if="mobileMenuOpen" @click="mobileMenuOpen = false"
                class="fixed inset-0 z-40 bg-dark-950/60 backdrop-blur-sm md:hidden"></div>
        </Transition>

        <header
            class="fixed px-2 lg:px-16 top-0 w-full z-50 transition-all duration-300 border-b border-white/5 bg-dark-950 md:bg-dark-950/80 md:backdrop-blur-xl supports-[backdrop-filter]:md:bg-dark-950/60">
            <div class="container mx-auto px-6 h-20 flex items-center justify-between">

                <NuxtLink to="/" class="flex items-center gap-3 group z-50">
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

                <nav class="hidden text-center md:flex items-center gap-8">
                    <NuxtLink to="/" class="text-sm text-center font-medium text-slate-400 hover:text-eco-400 transition-colors">
                        Beranda</NuxtLink>
                    <NuxtLink to="/blog"
                        class="text-sm font-medium text-slate-400 hover:text-eco-400 transition-colors">Edukasi
                    </NuxtLink>
                    <NuxtLink to="/about"
                        class="text-sm font-medium text-slate-400 hover:text-eco-400 transition-colors">Tentang
                    </NuxtLink>
                </nav>

                <NuxtLink to="/detection"
                    class="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border-2 border-white/10 hover:bg-white/10 hover:border-eco-500/50 text-sm font-medium text-white transition-all duration-300 group">
                    <span>Scan Sekarang</span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4 text-eco-400 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </NuxtLink>

                <button @click="mobileMenuOpen = !mobileMenuOpen"
                    class="md:hidden p-2 text-slate-300 hover:text-white transition-colors z-50">
                    <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </div>

            <Transition name="slide-down">
                <div v-if="mobileMenuOpen"
                    class="fixed inset-x-0 top-20 text-center bg-dark-950 border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl z-40">
                    <NuxtLink to="/" @click="mobileMenuOpen = false"
                        class="py-3 px-4 rounded-xl hover:bg-white/5 text-slate-300 hover:text-eco-400 font-medium transition-colors">
                        Beranda</NuxtLink>
                    <NuxtLink to="/blog" @click="mobileMenuOpen = false"
                        class="py-3 px-4 rounded-xl hover:bg-white/5 text-slate-300 hover:text-eco-400 font-medium transition-colors">
                        Edukasi</NuxtLink>
                    <NuxtLink to="/about" @click="mobileMenuOpen = false"
                        class="py-3 px-4 rounded-xl hover:bg-white/5 text-slate-300 hover:text-eco-400 font-medium transition-colors">
                        Tentang Kami</NuxtLink>
                    <div class="h-px bg-white/10 my-2"></div>
                    <NuxtLink to="/detection" @click="mobileMenuOpen = false"
                        class="btn-scan flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-eco-500 text-dark-950 font-bold hover:bg-eco-400 transition-colors">
                        Scan Sampah Sekarang
                    </NuxtLink>
                </div>
            </Transition>
        </header>

        <main class="flex-grow pt-20">
            <slot />
        </main>

        <footer class="border-t border-white/5 bg-dark-900/50 py-12">
            <div class="container mx-auto px-6 text-center">
                <p class="text-slate-500 text-sm mb-4">© {{ new Date().getFullYear() }} EcoLens. Teknologi Hijau untuk Masa Depan.</p>
                <div class="flex justify-center gap-6">
                    <a href="https://github.com/rizalharyaputra" class="text-slate-600 hover:text-eco-400 transition">GitHub</a>
                    <a href="https://rizalharyaputra.vercel.app/" class="text-slate-600 hover:text-eco-400 transition">Website</a>
                </div>
            </div>
        </footer>

        <ChatBot />

    </div>
</template>

<script setup>
// State untuk Mobile Menu
const mobileMenuOpen = ref(false);

// Tutup menu saat route berubah (navigasi)
const route = useRoute();
watch(() => route.path, () => {
    mobileMenuOpen.value = false;
});
</script>

<style scoped>
/* Aktif link style */
.router-link-active:not(.group) {
    color: #4ade80;
    /* eco-400 */
}

.router-link-active.btn-scan {
    /*  */
    color: #020617 ;
}

/* Animasi Slide Down untuk Mobile Menu */
.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.3s ease-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}

/* Animasi Fade untuk Overlay */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>