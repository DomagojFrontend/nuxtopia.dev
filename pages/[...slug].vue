<script setup lang="ts">
definePageMeta({
    documentDriven:{
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
        <ContentRenderer :key="page._id" :value="page" />
        <PagePrevNext />
        <!-- <ContentDoc>
            <template #not-found>
                <span>Error</span>
            </template>
        </ContentDoc> -->
    </main>
</template>