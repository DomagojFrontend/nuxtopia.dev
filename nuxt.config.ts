// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  ssr: true,
  modules: ['@nuxt/content', '@nuxt/ui', '@vueuse/nuxt', '@nuxthq/studio'],
  content: {
    highlight: {
      theme: 'github-dark'
    }
  },
  ui:{
    icons:['heroicons', 'carbon']
  },
  routeRules: {
    '/': { redirect: '/documentation/guide/about' },
    '/documentation/**': {cache: { maxAge: 60 * 60}},
  }
})