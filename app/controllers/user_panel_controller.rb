class UserPanelController < ApplicationController
<<<<<<< HEAD

    before_action :authenticate_user!
    def index

        @temp = Report.all
        @suspect_temp = Suspect.all

    end

    def report

    end

    def statistics

        # @reports = {}
        # @report_freq = {}
        # report_types = Report.select(:tipo).distinct
        # report_dates = Report.select(:fecha).distinct.order(:fecha)
        #
        # report_dates.each do | date |
        #     @report_freq[ date[:fecha] ] = Report.where(fecha: date[:fecha]).count
        # end
        #
        # report_types.each do | type |
        #     @reports[ type[:tipo] ] = Report.where(tipo: type[:tipo]).count
        # end
        #
        # @reports = @reports.to_json.html_safe
        #
        # @suspect_freq = {}
        # unique_dates = Suspect.select(:fecha).distinct.order(:fecha)
        # unique_dates.each do | date |
        #     @suspect_freq[ date[:fecha] ] = Suspect.where(fecha: date[:fecha]).count
        # end
        #
        # count = 0
        #
        # @report_freq.each do | key, value |
        #     if @suspect_freq.key?(key)
        #         count += 1
        #     end
        # end
        #
        # puts "The count is", count

        @reports = Report.type_reportCount
        @reports = @reports.to_json.html_safe

        @report_c, @suspect_c = Report.reportSuspect_freq
        @report_c = @report_c.to_json.html_safe
        @suspect_c = @suspect_c.to_json.html_safe

    end
=======
  
  before_action :authenticate_user!
  def index
      @temp = Report.all
      @suspect_temp = Suspect.all
      puts "Hello asdasdaosdkaosdk"
      puts @temps
  end

  def report

  end
  
  def statistics
      @report = Report.all
      @suspect = Suspect.all
  end
  
  
    
>>>>>>> 8a509b4cc8d279bfcb0bbd7561347513395ab6a0
end
