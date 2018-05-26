class Discussion < ApplicationRecord
    belongs_to :user
    has_many :comments, as: :commentable
    ratyrate_rateable "calificacion"
    
   
    
    
end
