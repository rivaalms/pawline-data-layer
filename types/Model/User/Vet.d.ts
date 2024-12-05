declare namespace Model {
   type Vet = {
      id: string
      name: string
      email: string
      user_ref_type: "App\\Models\\User\\Vet"
      user_ref: Model.Vet.Ref
      created_at: string
      updated_at: string
   }

   namespace Vet {
      type Ref = {
         id: string
         is_online: boolean
      }
   }
}