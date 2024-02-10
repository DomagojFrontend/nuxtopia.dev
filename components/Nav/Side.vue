
import type SideLinksVue from './SideLinks.vue';
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
    <aside>
        <div class="flex flex-row gap-4 px-8 max-w-7xl mx-auto">
            <div class="hidden md:flex md:col-span-2 py-4 px-2 min-h-screen border-r-[1px] border-gray-800">
                <UAccordion :items="items" default-open multiple color="black" variant="ghost">
                    <template #item="{ item }">
                        <div class="ml-3">
                            <NavSideLinks :links="item.links" />
                        </div>
                    </template>
                </UAccordion>
            </div>
            <div class="py-4 px-2 w-full">
                <slot />
            </div>
        </div>
    </aside>
</template>