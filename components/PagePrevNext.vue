<script setup lang="ts">
const { prev, next } = useContent()
</script>

<template>
    <div class="flex felx-col lg:flex-row justify-between items-center py-16 ">
        <UButtonGroup v-if="prev" class="flex flex-col items-start gap-4 border-[1px] border-gray-500 rounded-md px-4 py-8 group cursor-pointer border-[1px]:"
            variant="soft" color="gray" :to="prev._path">
            <UButton icon="i-carbon-arrow-left" class="mr-2" />
            <span>
                {{ prev.title }}
            </span>
            <span class="max-w-[120px] text-sm text-gray-400">
                {{ prev.description }}
            </span>
        </UButtonGroup>
        <UButtonGroup v-if="next" class="flex flex-col items-end text-right gap-4 border-[1px] border-gray-500 rounded-md px-4 py-8 "
            variant="soft" color="gray" :to="next._path">
            <UButton icon="i-carbon-arrow-right" class="ml-2" />
            <span>
                {{ next.title }}
            </span>
            <span class="max-w-[120px] text-sm text-gray-400">
                {{ next.description }}
            </span>
        </UButtonGroup>
    </div>
</template>
