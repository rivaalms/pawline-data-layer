declare namespace Model {
   type PetOwner = {
      id: string
      name: string
      email: string
      user_ref_type: "App\\Models\\User\\PetOwner"
      user_ref: Model.PetOwner.Ref
      created_at: string
      updated_at: string
   }

   namespace PetOwner {
      type Ref = {
         id: string
         phone_number: string
         address: string
      }
   }
}