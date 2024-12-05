export default defineEventHandler(async (event) => {
   const $api = useApi(event)
   const id = getRouterParam(event, 'id')
   const body = await readFormData(event)

   try {
      const response = await $api(`/medicines/${id}`, {
         method: "POST",
         body
      })
      return response
   } catch (error) {
      throwServerError(error)
   }
})