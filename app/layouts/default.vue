<template>
    <div class="flex flex-col min-h-screen">
        <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div class="container mx-auto px-4 h-16 flex items-center justify-between">
                <NuxtLink to="/" class="flex items-center gap-2 group">
                    <div
                        class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold group-hover:bg-green-700 transition">
                        E
                    </div>
                    <span
                        class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
                        EcoLens
                    </span>
                </NuxtLink>

                <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                    <NuxtLink to="/" class="hover:text-green-600 transition">Home</NuxtLink>
                    <NuxtLink to="/blog" class="hover:text-green-600 transition">Edukasi</NuxtLink>
                    <NuxtLink to="/about" class="hover:text-green-600 transition">Tentang</NuxtLink>
                </nav>

                <button
                    class="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition">
                    Coba AI
                </button>
            </div>
        </header>

        <main class="flex-grow">
            <slot />
        </main>

        <footer class="bg-white border-t border-gray-100 py-8 mt-12">
            <div class="container mx-auto px-4 text-center text-gray-500 text-sm">
                <p>© 2025 EcoLens AI. Dibuat untuk Bumi yang lebih baik.</p>
                <p class="mt-2">Developed by <span class="text-green-600 font-semibold">Nama Anda</span></p>
            </div>
        </footer>
    </div>
</template>