// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: { enabled: false },

   hooks: {
      'prepare:types'(ctx) {
         ctx.references.push({ path: './types/global.d.ts' })
      }
   },

   runtimeConfig: {
      apiUrl: process.env.NUXT_API_URL || ''
   }
})
