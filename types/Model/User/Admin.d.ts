declare namespace Model {
   type Admin = {
      id: string
      name: string
      email: string
      user_ref_type: "App\\Models\\User\\Admin"
      user_ref: Model.Admin.Ref
      created_at: string
      updated_at: string
   }

   namespace Admin {
      type Ref = {
         id: string
         is_superadmin: boolean
      }
   }
}