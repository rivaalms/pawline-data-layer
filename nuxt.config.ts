// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: { enabled: false },

   runtimeConfig: {
      apiUrl: process.env.NUXT_API_URL || ''
   }
})
