<template>
    <div class="min-h-screen bg-dark-950 relative overflow-hidden pb-24">

        <div v-if="!article" class="container mx-auto px-6 py-32 text-center relative z-10">
            <h1 class="text-4xl font-bold text-white mb-4">Artikel Tidak Ditemukan</h1>
            <NuxtLink to="/blog" class="text-eco-400 hover:underline">Kembali ke Blog</NuxtLink>
        </div>

        <div v-else>

            <div class="relative h-[60vh] w-full overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent z-10"></div>
                <img :src="article.image" :alt="article.title"
                    class="w-full h-full object-cover object-center fixed-img" />

                <div class="absolute bottom-0 left-0 w-full z-20 container mx-auto px-4 pb-12">
                    <div class="max-w-3xl mx-auto">
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-900/50 backdrop-blur border border-white/10 text-xs font-bold uppercase tracking-wide mb-4"
                            :class="article.accentColor">
                            {{ article.category }}
                        </div>
                        <h1 class="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {{ article.title }}
                        </h1>
                        <div class="flex items-center gap-6 text-slate-300 text-sm">
                            <div class="flex items-center gap-2">
                                <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-eco-400">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </div>

                                <span>Tim EcoLens</span>
                            </div>
                            <span>{{ article.date }}</span>
                            <span>{{ article.readTime }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mx-auto px-4 relative z-10 -mt-8">
                <div
                    class="max-w-3xl mx-auto bg-dark-900 border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative">

                    <div
                        class="absolute -top-20 -right-20 w-64 h-64 bg-eco-500/10 rounded-full blur-[80px] pointer-events-none">
                    </div>

                    <div class="prose prose-lg prose-invert max-w-none prose-p:text-slate-300 prose-headings:text-white prose-strong:text-white prose-a:text-eco-400 hover:prose-a:text-eco-300"
                        v-html="article.content">
                    </div>

                    <div
                        class="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <span class="text-slate-400 text-sm font-medium">Bagikan artikel ini:</span>

                        <div class="flex gap-3">
                            <button @click="handleShare"
                                class="group relative flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white hover:bg-eco-500 hover:text-dark-950 transition-all duration-300"
                                :class="isCopied ? 'bg-eco-500 text-dark-950' : ''">
                                <span v-if="isCopied"
                                    class="absolute -top-10 bg-white text-dark-950 text-xs font-bold px-2 py-1 rounded shadow-lg animate-bounce">
                                    Link Tersalin!
                                </span>

                                <div v-if="isCopied">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <div v-else class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                                        <polyline points="16 6 12 2 8 6" />
                                        <line x1="12" y1="2" x2="12" y2="15" />
                                    </svg>
                                    <span class="text-sm font-bold">Bagikan</span>
                                </div>
                            </button>

                            <a :href="`https://wa.me/?text=Baca artikel ini: ${article?.title} - ${encodeURIComponent('http://localhost:3000/blog/' + article?.slug)}`"
                                target="_blank"
                                class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-green-500 hover:scale-110 transition-all"
                                title="Share ke WhatsApp">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                                    <path
                                        d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mx-auto px-4 mt-20 max-w-5xl">
                <div class="flex items-center justify-between mb-8">
                    <h3 class="text-2xl font-bold text-white border-l-4 border-eco-500 pl-4">
                        Baca Juga
                    </h3>
                    <NuxtLink to="/blog"
                        class="text-sm text-eco-400 hover:text-eco-300 font-medium flex items-center gap-1">
                        Lihat Semua
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </NuxtLink>
                </div>

                <div class="grid md:grid-cols-2 gap-8">
                    <ArticleCard v-for="related in relatedArticles" :key="related.id" v-bind="related" />
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
const relatedArticles = computed(() => {
    if (!article.value) return [];

    let otherArticles = articles.filter(a => a.id !== article.value.id);

    otherArticles.sort((a, b) => {
        if (a.category === article.value.category) return -1;
        return 1;
    });

    return otherArticles.slice(0, 2);
});

const isCopied = ref(false);

const handleShare = async () => {
    if (import.meta.client) {
        const url = window.location.href;
        const title = article.value?.title || 'Artikel EcoLens';
        const text = `Cek artikel menarik ini tentang ${article.value?.category}: ${title}`;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    text: text,
                    url: url
                });
                return;
            } catch (err) {
                console.log('User closed share menu');
            }
        }

        try {
            await navigator.clipboard.writeText(url);

            isCopied.value = true;

            setTimeout(() => {
                isCopied.value = false;
            }, 2000);

        } catch (err) {
            console.error('Failed to copy:', err);
        }
    }
};

const route = useRoute();
const { articles } = useArticles();

const article = computed(() => {
    return articles.find(a => a.slug === route.params.slug);
});

useSeoMeta({
    title: () => article.value?.title || 'Artikel Edukasi',
    ogTitle: () => `${article.value?.title} - EcoLens Blog`,
    description: () => article.value?.excerpt || 'Baca artikel lengkap mengenai tips lingkungan dan pengelolaan sampah di EcoLens.',
    ogDescription: () => article.value?.excerpt || 'Tips lingkungan dan pengelolaan sampah terbaru.',
    ogImage: () => article.value?.image || 'https://www.ecolens.my.id/og-default-blog.jpg',
    ogType: 'article',
    twitterCard: 'summary_large_image',
})
</script>

<style scoped>
:deep(.prose p) {
    line-height: 1.8;
    margin-bottom: 1.5rem;
}

:deep(.prose ul) {
    margin-bottom: 1.5rem;
}
</style>