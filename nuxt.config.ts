// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxt/content', '@nuxt/ui', '@vueuse/nuxt'],
  content: {
    highlight: {
      theme: 'github-dark'
    }
  },
  routeRules: {
    '/documentation': {prerender: true, redirect: '/documentation/get_started/about' },
    // '/documentation/**/**': { prerender: true },
  }
})