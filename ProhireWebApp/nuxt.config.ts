// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-primevue", 'nuxt-purgecss'],
  ssr: true,
  css: [
    '/node_modules/primeflex/primeflex.css',
    'primevue/resources/themes/aura-light-green/theme.css',
    'primeicons/primeicons.css'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
    {
      path: '~/components/main',
      pathPrefix: false,
    },
  ],
  primevue: {
    cssLayerOrder: 'reset,primevue',
    options: {
      ripple: true,
      inputStyle: 'filled'
    }
  }

})