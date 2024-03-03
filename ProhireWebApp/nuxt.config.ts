// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-primevue", "@nuxtjs/ionic"],
  ssr: false,
  ionic: {
    integrations: {      //
    }, css: {      //
    }, config: {      //
    }
  },
})