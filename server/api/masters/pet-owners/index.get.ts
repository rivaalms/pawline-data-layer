export default defineEventHandler(async (event) => {
   const $api = useApi(event)
   const query = getQuery(event)

   try {
      const response = await $api(`/pet-owners`, {
         method: "GET",
         query
      })
      return response
   } catch (error) {
      throwServerError(error)
   }
})