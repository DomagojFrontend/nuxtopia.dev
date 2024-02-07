<script setup lang="ts">
definePageMeta({
    layout: 'docs'
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