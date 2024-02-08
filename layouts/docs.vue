<script setup lang="ts">
const queryGetStarted = await(queryContent('documentation', 'get_started').find())
const queryFrameworks = await(queryContent('documentation', 'frameworks').find())
const queryUi = await(queryContent('documentation', 'ui').find())

const getStartedLinks = await createNav(queryGetStarted)
const frameworksLinks = await createNav(queryFrameworks)
const uiLinks = await createNav(queryUi)

const items = [
    {
        label: 'Get started',
        icon: 'i-heroicons-information-circle',
        slot: 'guide'
    },
    {
        label: 'Frameworks',
        icon: 'i-heroicons-command-line',
        slot: 'frameworks'
    },
    {
        label: 'UI libraries',
        icon: 'i-heroicons-paint-brush',
        slot: 'ui'
    }
]
</script>

<template>
    <header>
        <TheNav />
        <div class="flex flex-row gap-4 px-8 max-w-7xl mx-auto">
            <div class="hidden md:flex md:col-span-2 py-4 px-2 min-h-screen border-r-[1px] border-gray-800">
                <UAccordion :items="items" multiple default-open color="black" variant="ghost">
                    <template #guide>
                        <div class="ml-3">
                            <TheDocsNav :links="getStartedLinks" />
                        </div>
                    </template>
                    <template #frameworks>
                        <div class="ml-3">
                            <TheDocsNav :links="frameworksLinks" />
                        </div>
                    </template>
                    <template #ui>
                        <div class="ml-3">
                            <TheDocsNav :links="uiLinks" />
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