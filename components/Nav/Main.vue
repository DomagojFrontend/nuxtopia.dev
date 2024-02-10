<script setup lang="ts">
const route = useRoute()
const showDocs = ref(false)

watch(() => route.path, value => {
    if (value.startsWith('/documentation')) {
        showDocs.value = true
    } else {
        showDocs.value = false
    }
}, { deep: true })
const { data: navigation } = await useAsyncData('navigation', () =>
    fetchContentNavigation()
)

const socials = [
    {
        icon: 'GitHub',
        link: 'https://github.com/nuxt/nuxt3'
    },
    {
        icon: 'Twitter',
        link: 'https://twitter.com/nuxt_js'
    }
]

const isOpen = ref(false)
</script>

<template>
    <header
        class="bg-background/75 backdrop-blur border-b -mb-px sticky top-0 z-50 border-gray-200 dark:border-gray-800 h-[64px]">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[64px] ">
            <div class="flex-1">
                <NuxtLink to="/">
                    <img src="/logo-green-white.svg" alt="Logo">
                </NuxtLink>
            </div>
            <div class="items-center gap-x-8 hidden lg:flex">
                <NuxtLink v-for="nav in navigation" :key="nav._path" :to="nav._path">{{ nav.title }}</NuxtLink>
            </div>
            <div class="flex items-center justify-end lg:flex-1 gap-1.5">
                <NuxtLink v-for="social in socials" :key="social.link" :to="social.link">{{ social.icon }}</NuxtLink>
            </div>
            <UButton class="block lg:hidden" variant="ghost" color="black" icon="i-heroicons-bars-3"
                @click="isOpen = !isOpen" />
        </div>
        <USlideover v-model="isOpen">
            <UButton class="absolute top-4 right-4" variant="ghost" color="black" icon="i-heroicons-x-mark"
                @click="isOpen = !isOpen" />
            <div class="flex flex-col gap-y-4 p-4">
                <NuxtLink @click="isOpen = false" v-for="nav in navigation" :key="nav._path" :to="nav._path">{{ nav.title }}
                </NuxtLink>
                <NavSide v-if="showDocs" />
            </div>
        </USlideover>
    </header>
</template>