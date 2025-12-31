// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Daftarkan modul yang baru diinstall
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content'
  ],

  // Konfigurasi Environment Variable (Agar API Key aman)
  runtimeConfig: {
    // Private keys (hanya terbaca di server/Nitro)
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    
    // Public keys (terbaca di browser/client)
    public: {
      appName: 'EcoLens AI'
    }
  },

  // (Opsional) Konfigurasi Tailwind agar scan file content
  // tailwindcss: {
  //   viewer: false,
  // }
})
