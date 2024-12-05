export default defineEventHandler(async (event) => {
   const $api = useApi(event)
   const body = await readBody(event)

   try {
      const response = await $api(`/vets`, {
         method: "POST",
         body
      })
      return response
   } catch (error) {
      throwServerError(error)
   }
})