class UserPanelController < ApplicationController

    before_action :authenticate_user!
    def index

        @temp = Report.show_all
        @suspect_temp = Suspect.show_all
        @transport_temp = Transport.show_all
        @reports = Report.paginate(page: params[:page], per_page: 10).order('created_at DESC')
        @transports = Transport.paginate(page: params[:page], per_page: 10).order('created_at DESC')
        @suspects = Suspect.paginate(page: params[:page], per_page: 10).order('created_at DESC')
        @routes = Route.all
         respond_to do |format|
          format.html
          format.js
        end
    end

    def report

    end

    def statistics
        @reports = Report.type_reportCount
        @reports = @reports.to_json.html_safe

        @report_c, @suspect_c = Report.reportSuspect_freq
        @report_c = @report_c.to_json.html_safe
        @suspect_c = @suspect_c.to_json.html_safe
        respond_to do |format|
            format.html
            format.pdf do
              render template: "user_panel/pdf.html.erb",
              pdf:"pdf",
              javascript_delay: 500
            end
        end
    end

    def view_all
        @reports = current_user.reports
        @suspects = current_user.suspects
        @routes = current_user.routes
    end
    
   
   
end
