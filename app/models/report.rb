class Report < ApplicationRecord
    mount_uploaders :images, ImageUploader
    serialize :images, JSON # If you use SQLite, add this line.
    belongs_to :user
    has_many :comments, as: :commentable
    # Validating marker
    validates :latitude, presence: true
    validates :longitude, presence: { message: "Please add a marker"}

    def self.alsdaoskdad
        @reports = {}
        @report_freq = {}
        report_types = Report.select(:tipo).distinct
        report_dates = Report.select(:fecha).distinct.order(:fecha)



        report_types.each do | type |
            @reports[ type[:tipo] ] = Report.where(tipo: type[:tipo]).count
        end

        @reports = @reports.to_json.html_safe

        @suspect_freq = {}
        unique_dates = Suspect.select(:fecha).distinct.order(:fecha)
        unique_dates.each do | date |
            @suspect_freq[ date[:fecha] ] = Suspect.where(fecha: date[:fecha]).count
        end

        @suspect_freq = @suspect_freq.to_json.html_safe

        return @suspect_freq
    end

    def self.reportSuspect_freq
        report_freq = {}
        suspect_freq = {}
        report_dates = Report.select(:fecha).distinct.order(:fecha)
        suspect_dates = Suspect.select(:fecha).distinct.order(:fecha)

        report_dates.each do | date |
            report_freq[ date[:fecha] ] = Report.where(fecha: date[:fecha]).count
            suspect_freq[ date[:fecha] ] = Suspect.where(fecha: date[:fecha]).count
        end

        return report_freq, suspect_freq
    end

    def self.type_reportCount
        reports = {}
        report_types = Report.select(:tipo).distinct

        report_types.each do | type |
            reports[ type[:tipo] ] = Report.where(tipo: type[:tipo]).count
        end

        return reports
    end

    def self.show_all
        return Report.all
    end
       
end
