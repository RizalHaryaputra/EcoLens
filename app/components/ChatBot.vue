<template>
    <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">

        <Transition name="slide-fade">
            <div v-if="isOpen" class="w-[350px] md:w-[400px] h-[500px] bg-dark-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col mb-4 relative overflow-hidden z-10">

                <Transition name="fade">
                    <div v-if="showClearConfirm"
                        class="absolute inset-0 z-50 bg-dark-950/60 backdrop-blur-sm flex items-center justify-center p-6 text-center">
                        <div
                            class="bg-dark-900 border border-white/10 rounded-2xl p-6 w-full shadow-2xl transform scale-100 transition-all">

                            <div
                                class="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/20">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" class="w-8 h-8 text-red-500">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </div>

                            <h3 class="text-white font-bold text-lg mb-2">Hapus Percakapan?</h3>
                            <p class="text-slate-400 text-sm mb-6">
                                Semua riwayat chat dengan EcoBot akan hilang permanen. Anda tidak bisa mengembalikannya.
                            </p>

                            <div class="flex gap-3">
                                <button @click="showClearConfirm = false"
                                    class="flex-1 py-2.5 px-4 rounded-xl border border-white/10 text-white text-sm font-bold hover:bg-white/5 transition-all">
                                    Batal
                                </button>
                                <button @click="confirmClearChat"
                                    class="flex-1 py-2.5 px-4 rounded-xl bg-red-500 text-white text-sm font-bold hover:bg-red-600 shadow-lg shadow-red-500/20 transition-all">
                                    Ya, Hapus
                                </button>
                            </div>
                        </div>
                    </div>
                </Transition>

                <div class="bg-dark-950 p-4 border-b border-white/5 flex justify-between items-center">
                    <div class="flex items-center gap-3">
                        <div
                            class="w-10 h-10 rounded-full bg-eco-500/20 flex items-center justify-center border border-eco-500/30">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-eco-400" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M12 8V4H8" />
                                <rect width="16" height="12" x="4" y="8" rx="2" />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-bold text-white text-sm">EcoBot AI</h3>
                            <p class="text-xs text-eco-400 flex items-center gap-1">
                                <span class="w-2 h-2 bg-eco-500 rounded-full animate-pulse"></span> Online
                            </p>
                        </div>
                    </div>
                    <!-- <button @click="isOpen = false" class="text-slate-400 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button> -->
                    <button @click="showClearConfirm = true" :disabled="messages.length <= 1" :class="[
                        'p-2.5 transition-colors',
                        messages.length <= 1
                            ? 'hidden'
                            : 'text-white cursor-pointer bg-red-500 rounded-xl hover:bg-red-500/90 shadow-[0_0_20px_rgba(239,68,68,0.4)]'
                    ]" title="Hapus Riwayat Chat">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>

                    </button>
                    <div :class="[
                        'p-1 transition-colors',
                        messages.length <= 1
                            ? 'flex gap-2'
                            : 'hidden']">
                        <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                </div>

                <div ref="messagesContainer" class="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
                    <div v-for="(msg, index) in messages" :key="index"
                        :class="['flex', msg.role === 'user' ? 'justify-end' : 'justify-start']">
                        <div :class="[
                            'max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed',
                            msg.role === 'user'
                                ? 'bg-white/10 text-white rounded-tr-none border border-white/5'
                                : 'bg-eco-500/10 text-eco-100 rounded-tl-none border border-eco-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]'
                        ]">
                            <span v-html="formatMessage(msg.text)"></span>
                        </div>
                    </div>

                    <div v-if="isLoading" class="flex justify-start">
                        <div
                            class="bg-eco-500/10 p-3 rounded-2xl rounded-tl-none border border-eco-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)] flex gap-1 items-center">
                            <span class="w-2 h-2 bg-eco-500/50 rounded-full animate-bounce"></span>
                            <span class="w-2 h-2 bg-eco-500/50 rounded-full animate-bounce delay-100"></span>
                            <span class="w-2 h-2 bg-eco-500/50 rounded-full animate-bounce delay-200"></span>
                        </div>
                    </div>
                </div>

                <form @submit.prevent="sendMessage" class="p-4 bg-dark-950 border-t border-white/5 flex gap-2">
                    <input v-model="inputMessage" type="text" placeholder="Tanya soal sampah..."
                        class="flex-1 bg-dark-900 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-eco-500/50 transition-all placeholder-slate-600"
                        :disabled="isLoading" />
                    <button type="submit" :disabled="!inputMessage.trim() || isLoading"
                        class="bg-eco-500 text-dark-950 p-2.5 rounded-xl hover:bg-eco-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </button>
                </form>

            </div>
        </Transition>

        <button @click="isOpen = !isOpen"
            class="w-14 h-14 bg-eco-500 text-dark-950 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all flex items-center justify-center relative group z-50">
            <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

            <span v-if="!isOpen"
                class="absolute right-16 bg-white text-dark-950 text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                Tanya EcoBot!
            </span>
        </button>

    </div>
</template>

<script setup>
const isOpen = ref(false);
const inputMessage = ref('');
const isLoading = ref(false);
const messagesContainer = ref(null);
const showClearConfirm = ref(false);

// Pesan awal default
const initialMessage = { role: 'model', text: 'Halo! Saya EcoBot 🤖. Bingung cara memilah sampah? Tanya saya saja!' };

// State Messages
const messages = ref([initialMessage]);

// Load chat dari Local Storage saat komponen dimuat
onMounted(() => {
    const savedMessages = localStorage.getItem('ecobot_history');
    if (savedMessages) {
        try {
            messages.value = JSON.parse(savedMessages);
        } catch (e) {
            console.error("Gagal memuat history chat", e);
        }
    }
    // Scroll ke bawah setelah load
    setTimeout(() => scrollToBottom(), 100);
});

// Simpan ke Local Storage setiap kali messages berubah
watch(messages, (newMessages) => {
    localStorage.setItem('ecobot_history', JSON.stringify(newMessages));
}, { deep: true });

// Fungsi Hapus Chat
const confirmClearChat = () => {
    messages.value = [initialMessage];
    localStorage.removeItem('ecobot_history');
    showClearConfirm.value = false; // Tutup modal setelah hapus
};

// Auto Scroll ke Bawah
const scrollToBottom = async () => {
    await nextTick();
    if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
};

// Fungsi Kirim Pesan
const sendMessage = async () => {
    if (!inputMessage.value.trim()) return;

    const userText = inputMessage.value;

    // 1. Tambahkan pesan user ke UI
    messages.value.push({ role: 'user', text: userText });
    inputMessage.value = '';
    isLoading.value = true;
    scrollToBottom();

    try {
        // 2. Siapkan history untuk dikirim ke API (convert ke format Gemini)
        const historyForApi = messages.value
            .filter(m => m.text !== 'Halo! Saya EcoBot 🤖. Bingung cara memilah sampah? Tanya saya saja!') // Hapus welcome message jika perlu, atau biarkan
            .map(m => ({
                role: m.role,
                parts: [{ text: m.text }]
            }));

        // 3. Panggil API
        const data = await $fetch('/api/chat', {
            method: 'POST',
            body: {
                message: userText,
                history: historyForApi.slice(0, -1) // Kirim history KECUALI pesan terakhir yang baru saja diketik (karena di server akan diproses)
            }
        });

        // 4. Tambahkan balasan bot
        messages.value.push({ role: 'model', text: data.reply });

    } catch (error) {
        messages.value.push({ role: 'model', text: 'Maaf, koneksi terputus. Silakan coba lagi nanti 😓' });
    } finally {
        isLoading.value = false;
        scrollToBottom();
    }
};

// Helper sederhana untuk Bold text (**text**)
const formatMessage = (text) => {
    if (!text) return '';

    // 1. Escape HTML dulu (Keamanan)
    let safeText = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // 2. Ubah **text** dan *text* menjadi <b>text</b> (Bold)
    safeText = safeText.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    safeText = safeText.replace(/\*(.*?)\*/g, '<b>$1</b>');

    // 3. Ubah karakter baris baru (\n) menjadi <br> (Agar turun ke bawah)
    safeText = safeText.replace(/\n/g, '<br>');

    return safeText;
}

// Watcher: Scroll otomatis saat chat dibuka
watch(isOpen, (newVal) => {
    if (newVal) scrollToBottom();
});
</script>

<style scoped>
/* Transisi Slide & Fade yang Halus */
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(20px) scale(0.95);
    opacity: 0;
}
</style>