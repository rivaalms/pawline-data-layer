declare namespace API {
   namespace Request {
      type Medicine = {
         name: string
         image: FileList | null
      }

      type Vet = {
         name: string
         email: string
         password: string
         password_confirmation: string
      }
   }
}