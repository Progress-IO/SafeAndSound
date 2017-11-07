class Transport < ApplicationRecord
    mount_uploaders :images, ImageUploader
    belongs_to :user
    has_many :comments, as: :commentable
    serialize :images, JSON # If you use SQLite, add this line.
    def self.show_all
        return Transport.all
    end
end
