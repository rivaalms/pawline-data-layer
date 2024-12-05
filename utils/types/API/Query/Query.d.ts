declare namespace API {
   namespace Query {
      type Medicine = Paginable & Searchable

      type Vet = Paginable & Searchable

      type PetOwner = Paginable & Searchable

      type Admin = Paginable & Searchable

      type Consultation = Paginable & Partial<Nullable<{
         owner: string
         vet: string
         pet: string
         status: Model.Consultation.Status
         date_from: string
         date_to: string
      }>>
   }
}