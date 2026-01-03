<template>
    <div class="min-h-screen bg-dark-950 relative overflow-hidden pt-24 pb-12 px-2 lg:px-16">

        <div
            class="absolute top-0 right-0 w-[500px] h-[500px] bg-eco-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2">
        </div>
        <div
            class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/2">
        </div>
        <div
            class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none">
        </div>

        <div class="container mx-auto px-4 relative z-10">

            <div class="text-center max-w-3xl mx-auto mb-12">
                <h1 class="text-3xl md:text-5xl font-bold text-white mb-6">
                    Pusat Edukasi <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-eco-400 to-teal-400">Lingkungan</span>
                </h1>
                <p class="text-slate-400 text-lg">
                    Temukan panduan daur ulang, tips gaya hidup zero-waste, dan inovasi teknologi hijau terkini di sini.
                </p>
            </div>

            <div
                class="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-dark-900/50 p-4 rounded-2xl border border-white/5 backdrop-blur-md">

                <div class="relative w-full lg:w-80">
                    <!-- <div class="absolute left-8">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-slate-500" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </svg>
                    </div> -->
                    <input v-model="searchQuery" type="text" placeholder="Cari artikel..."
                        class="w-full py-2.5 px-4 bg-dark-950 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-eco-500/50 focus:ring-1 focus:ring-eco-500/50 transition-all"
                        @input="currentPage = 1" />
                </div>
                <div class="flex flex-wrap justify-center lg:justify-end gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                    <button v-for="cat in categories" :key="cat" @click="selectedCategory = cat; currentPage = 1"
                        :class="[
                            'px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all border',
                            selectedCategory === cat
                                ? 'bg-eco-500 text-dark-950 border-eco-500 shadow-[0_0_15px_rgba(74,222,128,0.3)]'
                                : 'bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:text-white'
                        ]">
                        {{ cat }}
                    </button>
                </div>

            </div>

            <div v-if="paginatedArticles.length > 0" class="grid md:grid-cols-3 gap-8 mb-12">
                <ArticleCard v-for="(article, index) in paginatedArticles" :key="article.id" v-bind="article" />
            </div>

            <div v-else class="text-center py-20 bg-white/5 rounded-3xl border border-white/5 border-dashed">
                <div class="text-4xl mb-4">🔍</div>
                <h3 class="text-xl font-bold text-white mb-2">Artikel tidak ditemukan</h3>
                <p class="text-slate-400">Coba gunakan kata kunci lain atau ubah filter kategori.</p>
                <button @click="resetFilters" class="mt-6 text-eco-400 hover:text-eco-300 font-medium underline">
                    Reset Filter
                </button>
            </div>

            <div v-if="totalPages > 1" class="flex justify-center items-center gap-2">
                <button @click="prevPage" :disabled="currentPage === 1"
                    class="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-dark-900 text-white hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                </button>

                <button v-for="page in totalPages" :key="page" @click="currentPage = page" :class="[
                    'w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-all',
                    currentPage === page
                        ? 'bg-eco-500 text-dark-950 shadow-[0_0_10px_rgba(74,222,128,0.3)]'
                        : 'border border-white/10 bg-dark-900 text-slate-400 hover:bg-white/5 hover:text-white'
                ]">
                    {{ page }}
                </button>

                <button @click="nextPage" :disabled="currentPage === totalPages"
                    class="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-dark-900 text-white hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </button>
            </div>

        </div>
    </div>
</template>

<script setup>
// State untuk Search & Filter
const searchQuery = ref('');
const selectedCategory = ref('Semua');
const currentPage = ref(1);
const itemsPerPage = 6;

// Daftar Kategori
const categories = ['Semua', 'Daur Ulang', 'Panduan', 'Gaya Hidup', 'Teknologi'];

// MOCK DATA ARTIKEL (Min 8 item biar pagination kelihatan)
const articles = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=600&auto=format&fit=crop",
        category: "Daur Ulang",
        date: "12 Jan 2026",
        readTime: "5 Menit Baca",
        title: "Bahaya Mikroplastik bagi Ekosistem Laut",
        description: "Mikroplastik kini ditemukan di hampir seluruh bagian laut. Pelajari dampaknya bagi biota laut dan kesehatan manusia.",
        link: "/blog/mikroplastik",
        accentColor: "text-eco-400",
        hoverColor: "group-hover:text-eco-400 hover:text-eco-400"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1611843467160-25afb8df1074?w=600&auto=format&fit=crop",
        category: "Panduan",
        date: "10 Jan 2026",
        readTime: "7 Menit Baca",
        title: "Cara Membuat Kompos dari Sampah Dapur",
        description: "Jangan buang sisa sayuranmu! Ubah sampah organik rumah tangga menjadi pupuk subur dengan metode sederhana.",
        link: "/blog/kompos",
        accentColor: "text-eco-400",
        hoverColor: "group-hover:text-eco-400 hover:text-eco-400"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&auto=format&fit=crop",
        category: "Gaya Hidup",
        date: "08 Jan 2026",
        readTime: "4 Menit Baca",
        title: "Tips Memulai Hidup Minim Sampah (Zero Waste)",
        description: "Langkah-langkah kecil untuk mengurangi produksi sampah harianmu, mulai dari menolak kantong plastik.",
        link: "/blog/zero-waste",
        accentColor: "text-eco-400",
        hoverColor: "group-hover:text-eco-400 hover:text-eco-400"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1512418490979-92798cec1380?w=600&auto=format&fit=crop",
        category: "Teknologi",
        date: "05 Jan 2026",
        readTime: "6 Menit Baca",
        title: "Inovasi AI dalam Pengelolaan Sampah Kota",
        description: "Bagaimana kota-kota pintar menggunakan kecerdasan buatan untuk mengoptimalkan rute truk sampah dan pemilahan.",
        link: "/blog/ai-sampah",
        accentColor: "text-eco-400",
        hoverColor: "group-hover:text-eco-400 hover:text-eco-400"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1591193686104-fddba4d0e4d8?w=600&auto=format&fit=crop",
        category: "Daur Ulang",
        date: "02 Jan 2026",
        readTime: "5 Menit Baca",
        title: "Mengenal Kode Daur Ulang Plastik (1-7)",
        description: "Jangan salah pilah! Pahami arti simbol segitiga angka pada kemasan plastik agar proses daur ulang efektif.",
        link: "/blog/kode-plastik",
        accentColor: "text-eco-400",
        hoverColor: "group-hover:text-eco-400 hover:text-eco-400"
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1598737944400-f3fe63b9f32e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHBsYXN0aWN8ZW58MHx8MHx8fDA%3D",
        category: "Gaya Hidup",
        date: "28 Des 2025",
        readTime: "3 Menit Baca",
        title: "Pengganti Plastik Sekali Pakai yang Stylish",
        description: "Tampil keren sambil menjaga bumi dengan rekomendasi produk reusable yang awet dan fungsional.",
        link: "/blog/reusable-items",
        accentColor: "text-eco-400",
        hoverColor: "group-hover:text-eco-400 hover:text-eco-400"
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=600&auto=format&fit=crop",
        category: "Panduan",
        date: "20 Des 2025",
        readTime: "8 Menit Baca",
        title: "Membuat Ecobrick dari Botol Bekas",
        description: "Solusi kreatif untuk sampah plastik yang tidak bisa didaur ulang. Ubah botol bekas menjadi material bangunan.",
        link: "/blog/ecobrick",
        accentColor: "text-eco-400",
        hoverColor: "group-hover:text-eco-400 hover:text-eco-400"
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=600&auto=format&fit=crop",
        category: "Gaya Hidup",
        date: "15 Des 2025",
        readTime: "5 Menit Baca",
        title: "Minimalisme Digital: Bersihkan Sampah Elektronik",
        description: "Bukan hanya fisik, sampah digital juga memakan energi. Pelajari cara membersihkan jejak karbon digitalmu.",
        link: "/blog/digital-waste",
        accentColor: "text-eco-400",
        hoverColor: "group-hover:text-eco-400 hover:text-eco-400"
    },
];

// --- LOGIC FILTERING & PAGINATION ---

// 1. Filter Artikel berdasarkan Search & Category
const filteredArticles = computed(() => {
    return articles.filter(article => {
        // Filter Search (Title & Description)
        const query = searchQuery.value.toLowerCase();
        const matchesSearch = article.title.toLowerCase().includes(query) ||
            article.description.toLowerCase().includes(query);

        // Filter Category
        const matchesCategory = selectedCategory.value === 'Semua' ||
            article.category === selectedCategory.value;

        return matchesSearch && matchesCategory;
    });
});

// 2. Hitung Total Halaman
const totalPages = computed(() => {
    return Math.ceil(filteredArticles.value.length / itemsPerPage);
});

// 3. Potong Artikel untuk Halaman Aktif (Slice)
const paginatedArticles = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredArticles.value.slice(start, end);
});

// Fungsi Navigasi
const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
};
const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};
const resetFilters = () => {
    searchQuery.value = '';
    selectedCategory.value = 'Semua';
    currentPage.value = 1;
};

// SEO Meta
useHead({
    title: 'Blog & Edukasi - EcoLens',
    meta: [
        { name: 'description', content: 'Kumpulan artikel edukasi tentang daur ulang, lingkungan, dan gaya hidup hijau.' }
    ]
})
</script>

<style scoped>
/* Hilangkan scrollbar di filter kategori mobile */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>