<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
defineProps({
    code: {
        type: String,
        default: ''
    },
    language: {
        type: String,
        default: null
    },
    filename: {
        type: String,
        default: null
    },
    highlights: {
        type: Array as () => number[],
        default: () => []
    },
    meta: {
        type: String,
        default: null
    },
    class: {
        type: String,
        default: null
    }
})
const { copy, copied } = useClipboard()
</script>
<template>
    <div class="max-w-2xl rounded-t-md bg-slate-800 my-8 shadow-lg shadow-zinc-900">
        <div class="flex items-center justify-between rounded-t-md bg-zinc-900 text-gray-600 px-4 py-2">
            <div class="flex items-center justify-center gap-2">
                <UIcon v-if="filename" name="i-heroicons-code-bracket" />
                <span v-if="filename">{{ filename }}</span>
            </div>
            <div class="relative">
                <span class="absolute -top-8 left-0 border-[1px] bg-zinc-900 border-gray-800 rounded-md p-1" v-if="copied">Copied</span>
                <UButton icon="i-heroicons-clipboard-document" color="black" variant="ghost" @click="copy(code)" />
            </div>
        </div>
        <pre :class="$props.class" class="py-4"><slot /></pre>
    </div>
</template>
  
 
<style>
pre code .line {
    display: block;
}
</style>