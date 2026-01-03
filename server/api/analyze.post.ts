import { GoogleGenerativeAI } from "@google/generative-ai";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();

    if (!config.GEMINI_API_KEY) {
        throw createError({ statusCode: 500, message: 'API Key belum disetting di server' });
    }

    const genAI = new GoogleGenerativeAI(config.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

    const body = await readBody(event);
    const { imageBase64 } = body;

    if (!imageBase64) {
        throw createError({ statusCode: 400, message: 'Gambar wajib dikirim' });
    }

    try {
        const prompt = `
            Anda adalah ahli pengelolaan limbah dan lingkungan yang cerdas. Tugas Anda adalah mengidentifikasi objek dalam gambar untuk keperluan daur ulang.

            PENTING: Lakukan validasi ketat sebelum menjawab!
            
            ATURAN VALIDASI (SAFETY CHECKS):
            1. MANUSIA/HEWAN: Jika gambar didominasi oleh wajah manusia, tubuh manusia, atau hewan hidup, tandai sebagai Bukan Sampah.
            2. BARANG LAYAK PAKAI: Jika objek terlihat masih utuh, bersih, sedang dipakai (seperti kacamata di wajah, jam tangan, baju yang sedang dipakai), atau elektronik yang menyala/bagus, tandai sebagai BUKAN SAMPAH.
            3. OBJEK JAUH/LATAR BELAKANG: Fokus hanya pada objek utama di tengah/depan. Abaikan benda-benda di latar belakang kamar/ruangan.
            4. SAMPAH: Objek dianggap sampah jika: rusak, kotor, remuk, berada di tempat sampah, sisa makanan, atau kemasan kosong.

            Berikan respons HANYA dalam format JSON murni tanpa markdown.
            Struktur JSON:
            {
                "is_waste": boolean, (true jika ini sampah, false jika manusia/hewan/barang bagus)
                "refusal_reason": string, (Wajib diisi jika is_waste false. Contoh: "Terdeteksi manusia", "Barang masih layak pakai", "Gambar tidak jelas")
                "item_name": string, (Nama benda. Contoh: "Botol Plastik", "Kardus Bekas", atau "Manusia" jika bukan sampah)
                "category": string, (Pilih: "Organik", "Anorganik", "B3", atau "Bukan Sampah")
                "recyclable": boolean,
                "confidence_score": number, (0-100)
                "disposal_advice": string, (Saran pembuangan. Jika bukan sampah, berikan saran penggunaan/donasi)
                "fun_fact": string (Fakta unik terkait benda tersebut)
            }
    `.trim();


        const imagePart = {
            inlineData: {
                data: imageBase64,
                mimeType: "image/jpeg",
            },
        };

        // 4. Generate Content
        const result = await model.generateContent([prompt, imagePart]);
        const response = result.response;
        const text = response.text();

        // Bersihkan format jika Gemini tidak sengaja mengirim markdown block
        const cleanJson = text.replace(/```json | ```/g, '').trim();

        return JSON.parse(cleanJson);

    } catch (error) {
        console.error(error);
        throw createError({ statusCode: 500, message: 'Gagal menganalisis gambar' });
    }
});