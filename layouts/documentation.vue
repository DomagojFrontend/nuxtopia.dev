<script setup lang="ts">
const items = (await(queryContent().where({ _partial: true }).only(['label', 'icon', 'name']).find()))
items.forEach(async (item: any) => {
    const links = await queryContent('documentation', item.name).find()
    item.links = await createNav(links)
})

</script>

<template>
    <header>
        <TheNav />
        <div class="flex flex-row gap-4 px-8 max-w-7xl mx-auto">
            <div class="hidden md:flex md:col-span-2 py-4 px-2 min-h-screen border-r-[1px] border-gray-800">
                <UAccordion :items="items" multiple color="black" variant="ghost">
                    <template #item="{ item }">
                        <div class="ml-3">
                            <TheDocsNav :links="item.links" />
                        </div>
                    </template>
                    <template #getting>
                        <div class="ml-3">
                            Hello
                            <!-- <TheDocsNav :links="links" /> -->
                        </div>
                    </template>
                </UAccordion>
            </div>
            <div class="py-4 px-2 w-full">
                <slot />
            </div>
        </div>
    </header>
</template>