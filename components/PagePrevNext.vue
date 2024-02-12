<script setup lang="ts">
const { prev, next } = useContent()
const turnucateString = (str: string) => {
   return str.substring(0, 80) + '...' 
}
</script>

<template>
    <div class="bottom-0 flex flex-col lg:flex-row justify-between items-center gap-8 pt-16 px-4">
        <UButton v-if="prev" class="flex-1 flex flex-col w-full max-w-sm items-start gap-4 border-[1px] border-gray-500 rounded-md px-4 py-8 group cursor-pointer hover:bg-gray-50/10 transition-all ease-in-out duration-100"
            variant="soft" color="black" :to="prev._path">
            <UButton icon="i-carbon-arrow-left" class="group-hover:bg-primary/60 group-hover:text-white transition-all ease-in-out duration-100" />
            <span class="font-semibold text-lg">
                {{ prev.title }}
            </span>
            <span class="max-w-[70%] text-wrap max-h-24 overflow-hidden  text-gray-400">
                {{ turnucateString(prev.description) }}
            </span>
        </UButton>
        <UButton v-if="next" class="flex-1 flex flex-col w-full max-w-sm items-end text-right gap-4 border-[1px] border-gray-500 rounded-md px-4 py-8 group cursor-pointer hover:bg-gray-50/10 transition-all ease-in-out duration-100"
            variant="soft" color="black" :to="next._path">
            <UButton icon="i-carbon-arrow-right" class="group-hover:bg-primary/60 group-hover:text-white transition-all ease-in-out duration-100" />
            <span class="font-semibold text-lg">
                {{ next.title }}
            </span>
            <span class="max-w-[70%] text-wrap max-h-24 overflow-hidden  text-gray-400">
                {{ turnucateString(next.description) }}
            </span>
        </UButton>
        
    </div>
</template>
