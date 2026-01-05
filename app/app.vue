<script setup>
// Import custom css
import '~/assets/css/main.css'
</script>

<template>
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
