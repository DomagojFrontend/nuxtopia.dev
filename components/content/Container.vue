
<script setup lang="ts">
</script>

<template>
    <div class="flex flex-col gap-6 py-6 lg:py-8 max-w-2xl">
        <h2 class="text-2xl font-bold">
            <slot />
        </h2>
            <UDivider/>
        <slot name="description" />
    </div>
</template>