class Route < ApplicationRecord
    belongs_to :user
    validates :origin_latitude, presence: true
    validates :destination_latitude, presence: true
    validates :destination_longitude, presence: true
    validates :origin_longitude, presence: { message: "Marker must be added" }

    def self.Reports_position
        info = []

        Report.all.each do | r |
            report = {"lat" => r.latitude, "lng" => r.longitude }
            info.push(report)
        end

        return info

    end
end
