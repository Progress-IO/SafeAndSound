class Suspect < ApplicationRecord
    mount_uploaders :images, ImageUploader
    serialize :images, JSON # If you use SQLite, add this line.
    belongs_to :user
    has_many :comments, as: :commentable
    # Validation of marker
    validates :latitude, presence: true
    validates :longitude, presence: { message: "Marker must be added" }
    def self.show_all
        return Suspect.all
    end

    def self.search_keyword(keyword, sort_by, reverse, address)
        all = Suspect.where("details LIKE '%#{keyword}%' AND address LIKE '%#{address}%'").order(:fecha)
        if reverse == "true" then 
            return  all.sort_by{ |k|  k[sort_by]}.reverse 
        else 
            return  all.sort_by{ |k|  k[sort_by]} 
        end
    end
end
