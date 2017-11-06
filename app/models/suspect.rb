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
end
