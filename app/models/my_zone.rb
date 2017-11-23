class MyZone < ApplicationRecord
    belongs_to :user

    def self.degreesToRad(degrees)
        return degrees * 3.1415169235 /180
    end

    def self.distanceInKm(lat1 , lon1 , lat2 , lon2)
        earthRad = 6371
        dLat = degreesToRad(lat2 - lat1)
        dLon = degreesToRad(lon2 - lon1)

        lat1 = degreesToRad(lat1)
        lat2 = degreesToRad(lat2)

        a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2)
        c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
        return earthRad * c

    end

    def self.near_crimes(a)


        report = Report.all
        radius = a[:radius] / 1000

        results = []
        report.each do | r |
            if distanceInKm(r["latitude"], r["longitude"], a["latitude"], a["longitude"]) <= radius
                results.push(r)
            end
        end

        return results
    end
end
