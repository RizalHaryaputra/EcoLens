<template>
    <div
        class="group p-6 rounded-2xl bg-dark-900 border border-white/5 hover:border-eco-500/50 hover:bg-dark-900/80 transition-all duration-300 h-full">

        <div
            class="w-12 h-12 rounded-lg bg-eco-500/10 flex items-center justify-center mb-4 group-hover:bg-eco-500/20 transition-colors">
            <slot name="icon" />
        </div>

        <div>
            <h3 class="text-xl font-bold text-white mb-2">{{ title }}</h3>
            <p class="text-sm text-slate-400 leading-relaxed">
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