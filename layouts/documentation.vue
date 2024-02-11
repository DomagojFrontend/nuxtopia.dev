<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { AccordionItem, VerticalNavigationLink } from '#ui/types'
declare module '#ui/types' {
    export interface AccordionItem {
        links?: VerticalNavigationLink[]
    }
}
const items = ref<AccordionItem[]>()
items.value = await (queryContent().where({ _partial: true }).only(['label', 'icon', 'name']).find())
items.value.forEach(async (item: any) => {
    const links = ref<ParsedContent[]>()
    links.value = await queryContent('documentation', item.name).find()
    item.links = createNav(links.value)
})

</script>

<template>
    <main class=" bg-gray-950">
        <NavMain />
        <div class="flex flex-row gap-4 px-8 max-w-7xl mx-auto">
            <div class="hidden lg:flex md:col-span-2 py-4 px-2 min-h-screen border-r-[1px] border-gray-800">
                <NavSide />
            </div>
            <div class="pt-12 px-2 w-full min-h-screen">
                <slot />
            </div>
        </div>
    </main>
</template>