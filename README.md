# 🌿 EcoLens AI - Smart Waste Management Assistant

EcoLens adalah aplikasi web progresif yang menggabungkan **Kecerdasan Buatan (AI)** dengan misi pelestarian lingkungan. Aplikasi ini membantu pengguna mengidentifikasi jenis sampah melalui foto dan memberikan panduan edukasi pengelolaan sampah yang tepat.

![Vercel Deployment](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Nuxt.js](https://img.shields.io/badge/Nuxt.js-00DC82?style=for-the-badge&logo=nuxtdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)

---

## ✨ Fitur Utama

* **🔍 AI Waste Detection**: Identifikasi jenis sampah (Organik, Anorganik, B3) secara instan menggunakan Google Gemini 1.5 Flash Vision API.
* **🤖 EcoBot Assistant**: Chatbot asisten lingkungan yang siap menjawab pertanyaan seputar daur ulang dan gaya hidup *Zero Waste*.
* **📚 Pusat Edukasi**: Blog terintegrasi dengan fitur pencarian dan kategori untuk artikel-artikel lingkungan.
* **📱 Mobile First Design**: Antarmuka responsif dan modern dengan dukungan navigasi mobile yang intuitif.
* **🌙 Dark Mode Aesthetic**: Desain visual futuristik dengan skema warna gelap dan aksen hijau yang nyaman di mata.
* **🔄 Persistent Chat**: Riwayat percakapan dengan chatbot tersimpan aman di penyimpanan lokal browser.

## 🚀 Tech Stack

* **Frontend**: [Nuxt 4](https://nuxt.com/) (Vue.js Framework)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **AI Engine**: [Google Gemini AI](https://ai.google.dev/) (Generative AI SDK)
* **Analytics**: Vercel Web Analytics
* **Deployment**: Vercel

## 🛠️ Cara Menjalankan Lokal

1.  **Clone Repository**
    ```bash
    git clone https://github.com/rizalharyaputra/ecolens.git
    cd ecolens
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Konfigurasi Environment Variable**
    Buat file `.env` di direktori akar dan tambahkan API Key Gemini Anda:
    ```env
    GEMINI_API_KEY=masukkan_api_key_anda_disini
    ```

4.  **Jalankan Server Development**
    ```bash
    npm run dev
    ```
    Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 📸 Tampilan Aplikasi

* **Halaman Deteksi**: Area unggah foto dengan hasil analisis mendalam (tipe sampah, langkah pengelolaan, dan fakta unik).
* **EcoBot**: Jendela chat melayang dengan modal konfirmasi hapus riwayat kustom.
* **Tentang Kami**: Profil pengembang dan visi misi proyek.

## 📝 Lisensi

Proyek ini dibuat untuk tujuan edukasi dan pelestarian lingkungan.

---
Dibuat dengan 💚 oleh [Rizal Haryaputra](https://github.com/rizalharyaputra)
