
<script setup lang="ts">
</script>

<template>
    <div class="flex flex-col gap-6 py-6 lg:py-8 max-w-2xl">
        <h2 class="flex flex-row text-2xl font-bold hover:text-primary transition-colors ease-in-out duration-100 w-fit cursor-pointer">
            #<slot />
        </h2>
        <slot name="description" />
    </div>
</template>