<script setup>
// Import custom css
import '~/assets/css/main.css'
import { Analytics } from '@vercel/analytics/nuxt';

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/images/ecolens.png'
    }
  ]
})

useSeoMeta({
  title: 'EcoLens',
  ogTitle: 'EcoLens - Deteksi Sampah dengan AI',
  description: 'Ubah cara kamu memilah sampah dengan kecerdasan buatan. Scan sampahmu sekarang dan selamatkan bumi!',
  ogDescription: 'Ubah cara kamu memilah sampah dengan kecerdasan buatan. Scan sampahmu sekarang dan selamatkan bumi!',
  ogImage: 'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVjeWNsZXxlbnwwfHwwfHx8MA%3D%3D', // Ganti dengan gambar preview aplikasimu nanti
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <Analytics />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>



<style>
/* === MODERN PAGE TRANSITION (Blur & Slide) === */

/* Kondisi saat animasi sedang berjalan (durasi & timing function) */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
}

/* Kondisi Awal Masuk (Enter From) & Kondisi Akhir Keluar (Leave To) */
.page-enter-from,
.page-leave-to {
  opacity: 0;
  /* Efek Blur */
  filter: blur(8px);
  /* Efek Geser sedikit ke bawah/atas */
  transform: translateY(10px) scale(0.98);
}


html {
  overflow-y: scroll;
}
</style>
