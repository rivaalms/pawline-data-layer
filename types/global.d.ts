import type { API } from './API/Response'

declare global {
   namespace API {
      type Response<T> = import('./API/Response').API.Response<T>
      type Pagination<T> = import('./API/Response').API.Pagination<T>
   }
}
