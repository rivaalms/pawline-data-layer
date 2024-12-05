declare namespace Model {
   type Pet = {
      id: string
      owner_id: string
      name: string
      type: Pet.Type
      created_at: string
      updated_at: string
      owner: Model.PetOwner
   }

   namespace Pet {
      type Type = 'dog' | 'cat' | 'bird' | 'other'
   }
}