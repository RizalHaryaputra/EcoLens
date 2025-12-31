import { GoogleGenerativeAI } from "@google/generative-ai";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();

    if (!config.GEMINI_API_KEY) {
        throw createError({ statusCode: 500, message: 'API Key belum disetting di server' });
    }

    const genAI = new GoogleGenerativeAI(config.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const body = await readBody(event);
    const { imageBase64 } = body;

    if (!imageBase64) {
        throw createError({ statusCode: 400, message: 'Gambar wajib dikirim' });
    }

    try {
        const prompt = `
            Kamu adalah EcoLens, asisten AI ahli lingkungan.

            WAJIB kembalikan response berupa JSON VALID SAJA.
            TIDAK BOLEH ada teks tambahan, markdown, atau penjelasan lain.

            Format JSON:
            {
            "item_name": "string",
            "category": "Organik | Anorganik | B3 | Residu",
            "recyclable": true,
            "confidence_score": 0-100,
            "disposal_advice": "string (maks 2 kalimat)",
            "fun_fact": "string"
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