class Transport < ApplicationRecord
    mount_uploaders :images, ImageUploader
    belongs_to :user
    has_many :comments, as: :commentable
    serialize :images, JSON # If you use SQLite, add this line.
    def self.show_all
        return Transport.all
    end

    def self.lines_freq
        lines_freq = {}
        lines = Transport.select(:id_route).distinct

        lines.each do | line |
            lines_freq[ line[:id_route] ] = Transport.where(id_route: line[:id_route]).count
        end

        return lines_freq
    end
end
