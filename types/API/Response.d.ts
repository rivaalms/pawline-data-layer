declare namespace API {
   declare type Response<T> = {
      meta: {
         success: boolean
         code: number
         message: string
      }
      data: T
   }

   declare type Pagination<T> = {
      current_page: number
      data: T
      from : number
      to: number
      total: number
      per_page: number
      last_page: number
   }
}

export { API }
