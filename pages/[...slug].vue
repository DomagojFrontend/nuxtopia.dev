<script setup lang="ts">
definePageMeta({
    documentDriven: {
        page: true,
        surround: true
    }
})
const { page } = useContent()
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `Nuxtopia -${titleChunk}` : 'Nuxtopia';
    }
})
</script>

<template>
    <main>
        <NuxtLayout name="default">
                <ContentRenderer :key="page._id" :value="page" />
                <PagePrevNext />
        </NuxtLayout>
    </main>
</template>