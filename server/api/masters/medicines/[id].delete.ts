export default defineEventHandler(async (event) => {
   const $api = useApi(event)
   const id = getRouterParam(event, 'id')

   try {
      const response = await $api(`/medicines/${id}`, {
         method: "DELETE"
      })
      return response
   } catch (error) {
      console.log("🚀 ~ defineEventHandler ~ error:", error)
      throwServerError(error)
   }
})