declare namespace Model {
   type Consultation = {
      id: string
      pet_owner_id: string
      vet_id: string
      pet_id: string
      symptoms: string
      status: Consultation.Status
      reason: string | null
      started_at: string | null
      finished_at: string | null
      created_at: string
      updated_at: string
      pet_owner: Model.PetOwner
      vet: Model.Vet
      pet: Model.Pet
      conversation: Model.Consultation.Conversation
   }

   namespace Consultation {
      type Status = 'pending' | 'on progress' | 'ended' | 'finished' | 'rejected'

      type Conversation = {
         id: string
         messages?: Model.Consultation.Conversation.Message[]
      }

      namespace Conversation {
         type Message = {
            id: string
            conversation_id: string
            sender_id: string
            type: 'text' | 'image'
            content: string
            created_at: string
            updated_at: string
            sender: Model.User
         }
      }
   }
}