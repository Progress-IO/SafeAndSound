class Route < ApplicationRecord
    belongs_to :user

    def self.Reports_position
        info = []

        Report.all.each do | r |
            report = {"lat" => r.latitude, "lng" => r.longitude }
            info.push(report)
        end

        return info

    end
end
