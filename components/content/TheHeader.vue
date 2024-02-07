<script setup lang="ts">
defineProps({
    label: {
        type: String,
        default: 'Get started'
    },
    title: {
        type: String,
        default: 'Nuxtopia'
    },
    description: {
        type: String,
        default: 'At Nuxtopia you can find all the resources you need to get started with Nuxt.js.'
    }
})
</script>
<template>
    <header class="flex flex-col gap-3 py-8">
        <UBadge :label="label" size="md" class="mr-auto" />
        <h1 class="text-3xl mdtext-4xl font-bold tracking-tighter">
            {{ title }}
        </h1>
        <span class="text-lg  text-gray-700 dark:text-gray-500 font-semibold">{{ description }}</span>
    </header>
    <UDivider />
</template>