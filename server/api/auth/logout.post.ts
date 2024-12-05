export default defineEventHandler(async (event) => {
   const $api = useApi(event)

   try {
      const response = await $api<API.Response<boolean>>('/auth/logout', {
         method: "POST",
      })

      deleteCookie(event, 'pawline_auth_token', {
         path: '/'
      })

      return response
   } catch (error) {
      throwServerError(error)
   }
})