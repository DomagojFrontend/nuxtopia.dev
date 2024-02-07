
<script setup lang="ts">
</script>

<template>
    <div class="flex flex-col gap-6 py-4 sm:py-6 lg:py-8">
        <h2 class="text-2xl font-bold">
            <slot />
        </h2>
        <slot name="description" />
    </div>
</template>