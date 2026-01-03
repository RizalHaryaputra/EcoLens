<template>
    <div
        class="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-eco-500/30 transition-all duration-300 relative overflow-hidden h-full">

        <div
            class="absolute -right-10 -top-10 w-32 h-32 bg-eco-500/10 rounded-full blur-3xl group-hover:bg-eco-500/20 transition-all">
        </div>

        <div
            class="w-14 h-14 rounded-2xl bg-dark-950 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-eco-500/50 transition-transform duration-300 shadow-lg relative z-10">
            <slot name="icon" />
        </div>

        <div class="relative z-10">
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-eco-400 transition-colors">
                {{ title }}
            </h3>
            <p class="text-slate-400 text-sm leading-relaxed">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
</script>