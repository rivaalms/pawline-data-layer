export default defineEventHandler(async (event) => {
   const $api = useApi(event)
   const body = await readBody<Request.Auth.Login>(event)

   try {
      const response = await $api<API.Response<Model.Auth>>('/auth/login', {
         method: 'POST',
         body
      })

      setCookie(event, 'pawline_auth_token', response.data.token, {
         httpOnly: false,
         secure: process.env.NODE_ENV == 'production',
         sameSite: 'lax',
         path: '/',
      })

      return response
   } catch (error) {
      throwServerError(error)
   }

})