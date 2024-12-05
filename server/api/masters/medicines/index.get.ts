export default defineEventHandler(async (event) => {
   const $api = useApi(event)
   const query = getQuery(event)

   try {
      const response = await $api('/medicines', {
         method: "GET",
         query
      })
      return response
   } catch (error) {
      throwServerError(error)
   }
})