<script setup lang="ts">
definePageMeta({
    layout: 'docs'
})
</script>

<template>
    <main>
        <ContentDoc  :path="$route.path">
            <template #not-found>
                <span>Error</span>
            </template>
        </ContentDoc>
    </main>
</template>