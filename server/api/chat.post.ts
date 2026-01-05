import { GoogleGenerativeAI } from "@google/generative-ai";

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const { message, history } = body;

        if (!message) {
            throw createError({ statusCode: 400, statusMessage: "Message is required" });
        }

        const config = useRuntimeConfig();
        const genAI = new GoogleGenerativeAI(config.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

        // --- SYSTEM INSTRUCTION ---
        const systemInstruction = `
        Anda adalah "EcoBot", asisten virtual ramah dari aplikasi EcoLens.
        Tugas Anda adalah mengedukasi pengguna tentang:
        1. Cara memilah sampah (Organik, Anorganik, B3).
        2. Ide kreatif daur ulang (DIY).
        3. Fakta lingkungan dan perubahan iklim.
        4. Gaya hidup Zero Waste.

        ATURAN PENTING:
        - Jawablah dengan bahasa Indonesia yang santai, ramah, dan memotivasi (gunakan emoji sesekali 🌿).
        - Jawaban harus ringkas, padat, dan langsung ke poin (jangan terlalu panjang).
        - JIKA pengguna bertanya di luar topik lingkungan (misal: "Siapa presiden AS?", "Kerjakan PR matematika"), tolak dengan sopan: "Maaf, EcoBot hanya bisa membahas seputar lingkungan dan sampah ya! 🌱".
    `;

        // Mulai Chat dengan History
        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: systemInstruction }],
                },
                {
                    role: "model",
                    parts: [{ text: "Siap! Saya EcoBot, asisten lingkungan Anda. Ada yang bisa dibantu? 🌿" }],
                },
                ...history // Masukkan riwayat chat sebelumnya dari frontend
            ],
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;

        return {
            reply: response.text()
        };

    } catch (error) {
        console.error("Chat Error:", error);
        throw createError({ statusCode: 500, statusMessage: "Gagal memproses pesan" });
    }
});