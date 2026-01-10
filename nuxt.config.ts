// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  site: {
    url: 'https://ecolens.my.id',
    name: 'EcoLens',
    description: 'Aplikasi deteksi jenis sampah berbasis AI (Gemini Vision) untuk membantu pemilahan sampah dan edukasi lingkungan.',
    image: '/images/ecolens.png',
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  runtimeConfig: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,

    public: {
      appName: 'EcoLens'
    }
  },

  app: {
    head: {
      // Template Judul: "Halaman - EcoLens"
      titleTemplate: '%s - EcoLens',
      title: 'EcoLens',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'id' // Bahasa Indonesia
      },
      meta: [
        { name: 'description', content: 'Aplikasi deteksi jenis sampah berbasis AI (Gemini Vision) untuk membantu pemilahan sampah dan edukasi lingkungan.' },
        { name: 'theme-color', content: '#22c55e' } // Warna hijau EcoLens di bar browser HP
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/ecolens.png' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})
