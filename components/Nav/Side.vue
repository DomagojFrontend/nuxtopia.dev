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
        <div class="flex flex-row w-full lg:gap-4 lg:px-8 lg:max-w-7xl lg:mx-auto">
            <div class="flex w-full lg:col-span-2 pt-24 lg:pt-12 px-2 max-h-screen">
                <UAccordion :items="items" multiple color="black" variant="ghost">
                    <template #item="{ item }">
                        <div class="ml-3">
                            <NavSideLinks :links="item.links" />
                        </div>
                    </template>
                </UAccordion>
            </div>
        </div>
    </aside>
</template>