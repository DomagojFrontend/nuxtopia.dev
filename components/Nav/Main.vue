<script setup lang="ts">
// const { data: navigation } = await useAsyncData('navigation', () =>
//     fetchContentNavigation()
// )

const socials = [
    {
        icon: 'i-carbon-logo-github',
        link: 'https://github.com/DomagojFrontend/nuxtopia.dev'
    },
    {
        icon: 'i-carbon-logo-x',
        link: 'https://twitter.com/nuxt_js'
    }
]
</script>

<template>
    <header
        class="bg-background/75 backdrop-blur border-b -mb-px fixed inset-0 z-50 border-gray-200 dark:border-gray-800 h-[64px]">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[64px] ">
            <div class="flex-1">
                <NuxtLink to="/">
                    <img src="/logo-green-white.svg" alt="Logo">
                </NuxtLink>
            </div>
            <div class="flex-1 items-center justify-center flex">

                <UBadge label="Work in progress" variant="outline"/>
            </div>
            <!-- <div class="items-center gap-x-8 hidden lg:flex">
                <NuxtLink v-for="nav in navigation" :key="nav._path" :to="nav._path">{{ nav.title }}</NuxtLink>
            </div> -->
            <div class="flex items-center justify-end lg:flex-1 gap-1.5">
                <UButton v-for="social in socials" variant="ghost" color="black" size="md" :to="social.link"
                    :icon="social.icon" />
            </div>
        </div>
    </header>
</template>