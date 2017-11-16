class Report < ApplicationRecord
    mount_uploaders :images, ImageUploader
    serialize :images, JSON # If you use SQLite, add this line.
    belongs_to :user
    has_many :comments, as: :commentable
    # Validating marker
    validates :latitude, presence: true
    validates :longitude, presence: { message: "Please add a marker"}

    rails_admin do 
        list do
            field :id
            field :route
            field :date
            field :mode
        end
    end

 

    def self.crime_n_suspect
        all = []
        ra = Report.all
        rs = Suspect.all

        ra.each do |x|
            all.push(x)
        end

        rs.each do |x|
            all.push(x)
        end

        all = all.sort_by{ |k|  k[:fecha]}

        return all
    end

    def self.search_keyword_with_suspect(keyword, sort_by, reverse, address)
        all = []
        ra = Report.where("details LIKE '%#{keyword}%' AND address LIKE '%#{address}%'").order(:fecha)
        rs = Suspect.where("details LIKE '%#{keyword}%' AND address LIKE '%#{address}%'").order(:fecha)

        ra.each do |x|
            all.push(x)
        end

        rs.each do |x|
            all.push(x)
        end

        if sort_by == "tipo"
            if reverse == "true" then return all.reverse else return all end
        end

        if reverse == "true" then return  all.sort_by{ |k|  k[sort_by]}.reverse else return  all.sort_by{ |k|  k[sort_by]} end

    end

    def self.search_keyword(keyword, sort_by, reverse, address)
        all = Report.where("details LIKE '%#{keyword}%' AND address LIKE '%#{address}%'").order(:fecha)
        if reverse == "true" then 
            return  all.sort_by{ |k|  k[sort_by]}.reverse 
        else 
            return  all.sort_by{ |k|  k[sort_by]} 
        end
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

    def self.user_reports
        return User.current_user.reports
        # return Report.where(" user_id ==  "+User.current_user.id.to_s)
    end
       

    def self.only_transport
        reports1 = Report.where(tipo_transp: "transmilenio") 
        reports2 = Report.where(tipo_transp: "sitp")
        return (reports1 + reports2)
    end


    def self.lines_freq
        lines_freq = {}
        lines = Report.select(:id_route).distinct

        lines.each do | line |
            lines_freq[ line[:id_route] ] = Report.where(id_route: line[:id_route]).count
        end

        return lines_freq
    end

end
