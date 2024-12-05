export default defineEventHandler(async (event) => {
   const $api = useApi(event)
   const id = getRouterParam(event, 'id')

   try {
      const response = await $api(`/admins/${id}`, {
         method: "DELETE"
      })
      return response
   } catch (error) {
      throwServerError(error)
   }
})