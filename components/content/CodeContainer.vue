<script setup lang="ts">
defineProps({
    file: {
        type: String,
        default: 'file.ts',
        required: true
    }
})
</script>
<template>
    <UCard>
        <template #header>
            <div class="w-full flex flex-row justify-between items-center">
                <div>
                    <UIcon name="i-heroicons-code-bracket" />
                    <span>{{ file }}</span>
                </div>
            </div>
        </template>
        <slot />
    </UCard>
</template>