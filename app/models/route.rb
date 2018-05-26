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

    def self.search_keyword(keyword, sort_by, reverse, address)
        all = Route.where("mode LIKE '%#{keyword}%' AND route LIKE '%#{address}%'").order(:date)
        if reverse == "true" then 
            return  all.sort_by{ |k|  k[sort_by]}.reverse 
        else 
            return  all.sort_by{ |k|  k[sort_by]} 
        end
    end

    def self.show_all
        return Route.all
    end
end
