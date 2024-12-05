export default defineEventHandler(async (event) => {
   const $api = useApi(event)
   const id = getRouterParam(event, 'id')
   const body = await readBody(event)

   try {
      const response = await $api(`/pet-owners/${id}`, {
         method: "PUT",
         body
      })
      return response
   } catch (error) {
      throwServerError(error)
   }
})