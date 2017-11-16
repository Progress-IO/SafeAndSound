class Discussion < ApplicationRecord
    belongs_to :user
    include FiveStar.rateable
    
   
    
    
end
