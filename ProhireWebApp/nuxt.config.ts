// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-primevue", 'nuxt-purgecss'],
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
    // cssLayerOrder: 'reset,primevue',
    options: {
      ripple: true,
      inputStyle: 'filled'
    }
  },
  purgecss: {
    enabled: false, // Always enable purgecss
    // safelist: ['my-class'], // Add my-class token to the safelist (e.g. .my-class)
  }

})