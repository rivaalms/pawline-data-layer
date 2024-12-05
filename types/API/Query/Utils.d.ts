declare namespace API {
   namespace Query {
      type Paginable = {
         page: number
         per_page: number
      }

      type Searchable = {
         search: string
      }
   }
}