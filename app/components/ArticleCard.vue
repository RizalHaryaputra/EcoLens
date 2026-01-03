<template>
    <article
        class="group bg-dark-900 border border-white/5 rounded-2xl overflow-hidden hover:border-eco-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] h-full flex flex-col">

        <div class="relative h-48 overflow-hidden shrink-0">
            <img :src="image" :alt="title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute top-4 left-4 bg-dark-900/80 backdrop-blur text-xs font-bold px-3 py-1 rounded-full border border-white/10"
                :class="accentColor">
                {{ category }}
            </div>
        </div>

        <div class="p-6 flex flex-col flex-grow">
            <div class="text-xs text-slate-500 mb-3 flex items-center gap-2">
                <span>{{ date }}</span> • <span>{{ readTime }}</span>
            </div>

            <h3 class="text-xl font-bold text-white mb-3 transition-colors line-clamp-2" :class="hoverColor">
                {{ title }}
            </h3>

            <p class="text-slate-400 text-sm mb-6 line-clamp-3 flex-grow">
                {{ description }}
            </p>

            <NuxtLink :to="link"
                class="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors mt-auto"
                :class="hoverColor">
                Baca Selengkapnya
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                </svg>
            </NuxtLink>
        </div>
    </article>
</template>

<script setup>
defineProps({
    image: String,
    category: String,
    date: String,
    readTime: String,
    title: String,
    description: String,
    link: String,
    // Props untuk warna (Agar bisa beda-beda: Hijau, Biru, Ungu)
    accentColor: {
        type: String,
        default: 'text-eco-400'
    },
    hoverColor: {
        type: String,
        default: 'group-hover:text-eco-400 hover:text-eco-400'
    }
})
</script>