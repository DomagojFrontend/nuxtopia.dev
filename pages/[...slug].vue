<script setup lang="ts">
definePageMeta({
    layout: 'documentation',
})
useHead({
    titleTemplate: (titleChunk) => {
    return titleChunk ? `Nuxtopia -${titleChunk}` : 'Nuxtopia';
  }
})
</script>

<template>
    <main>
        <ContentDoc>
            <template #not-found>
                <span>Error</span>
            </template>
        </ContentDoc>
    </main>
</template>