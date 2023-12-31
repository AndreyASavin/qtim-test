// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~~/assets/styles/index.scss"
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],
  modules: [
    '@pinia/nuxt',
  ],
})
