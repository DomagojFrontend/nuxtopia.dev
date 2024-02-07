<script setup lang="ts">
const queryGetStarted = await (queryContent('documentation', 'get_started').find())
const queryFrameworks = await (queryContent('documentation', 'frameworks').find())
const queryUi = await (queryContent('documentation', 'ui').find())

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
    <TheNav />
    <main>
        <div class="flex flex-row gap-4 px-8 max-w-7xl mx-auto">
            <div class="hidden md:flex md:col-span-2 py-4 px-2 min-h-screen border-r-[1px] border-gray-800">
                <UAccordion :items="items" multiple color="black" variant="ghost">
                    <template #guide>
                        <div class="ml-3">
                            <UVerticalNavigation :links="getStartedLinks" :ui="{
                                wrapper: 'border-s border-gray-200 dark:border-gray-800 space-y-2',
                                base: 'group block border-s -ms-px lg:leading-6 before:hidden',
                                padding: 'p-0 ps-4',
                                margin: 'my-2',
                                rounded: '',
                                font: '',
                                ring: '',
                                active: 'text-primary-500 dark:text-primary-400 border-current font-semibold',
                                inactive: 'border-transparent hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300'
                            }">
                                <template #default="{ link }">
                                    <span>{{ link.label }}</span>
                                </template>
                            </UVerticalNavigation>
                        </div>
                    </template>
                    <template #frameworks>
                        <div class="ml-3">
                            <UVerticalNavigation :links="frameworksLinks" :ui="{
                                wrapper: 'border-s border-gray-200 dark:border-gray-800 space-y-2',
                                base: 'group block border-s -ms-px lg:leading-6 before:hidden',
                                padding: 'p-0 ps-4',
                                margin: 'my-2',
                                rounded: '',
                                font: '',
                                ring: '',
                                active: 'text-primary-500 dark:text-primary-400 border-current font-semibold',
                                inactive: 'border-transparent hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300'
                            }">
                                <template #default="{ link }">
                                    <span>{{ link.label }}</span>
                                </template>
                            </UVerticalNavigation>
                        </div>
                    </template>
                    <template #ui>
                        <div class="ml-3">
                            <UVerticalNavigation :links="uiLinks" :ui="{
                                wrapper: 'border-s border-gray-200 dark:border-gray-800 space-y-2',
                                base: 'group block border-s -ms-px lg:leading-6 before:hidden',
                                padding: 'p-0 ps-4',
                                rounded: '',
                                font: '',
                                ring: '',
                                active: 'text-primary-500 dark:text-primary-400 border-current font-semibold',
                                inactive: 'border-transparent hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300'
                            }">
                                <template #default="{ link }">
                                    <span>{{ link.label }}</span>
                                </template>
                            </UVerticalNavigation>
                        </div>
                    </template>
                </UAccordion>
            </div>

            <div class="py-4 px-2 w-full">
                <slot />
            </div>
        </div>
    </main>
</template>