export default defineEventHandler(async (event) => {
   const $api = useApi(event)
   const body = await readFormData(event)

   try {
      const response = await $api(`/medicines`, {
         method: "POST",
         body
      })
      return response
   } catch (error) {
      throwServerError(error)
   }
})