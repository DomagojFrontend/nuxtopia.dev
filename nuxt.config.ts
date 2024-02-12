// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  ssr: true,
  modules: ['@nuxt/content', '@nuxt/ui', '@vueuse/nuxt', '@nuxthq/studio','@tresjs/nuxt'],
  content: {
    highlight: {
      theme: 'github-dark'
    },
    documentDriven: true
  },
  ui:{
    icons:['heroicons', 'carbon']
  },
  routeRules: {
    '/documentation': { redirect: '/documentation/guide/about' },
  }
})