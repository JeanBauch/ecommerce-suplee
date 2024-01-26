// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/web-vitals', '@vueuse/nuxt', '@pinia/nuxt'],
  css: ['~/assets/css/main.css']
})
