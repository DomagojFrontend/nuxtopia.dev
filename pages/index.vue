<script setup lang="ts">
const { data } = await useAsyncData('page-data', () => queryContent('/').findOne())
</script>

<template>
    <main class="min-h-screen flex flex-col justify-center items-center gap-12 bg-gray-950">
      <NavMain />
      <h1 class="text-5xl font-bold text-center">Welcome to <span class="text-primary">Nuxt</span>opia</h1>
      <UButton to="/documentation" size="xl">Get Started</UButton>
    </main>
</template>