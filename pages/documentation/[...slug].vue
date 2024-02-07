<script setup lang="ts">
definePageMeta({
    layout: 'docs'
})
</script>

<template>
    <main>
        <ContentDoc  :path="$route.path"/>
    </main>
</template>