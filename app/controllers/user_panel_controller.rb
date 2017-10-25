class UserPanelController < ApplicationController

    before_action :authenticate_user!
    def index

        @temp = Report.all
        @suspect_temp = Suspect.all

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
              javascript_delay: 1000
            end
        end
    end
end
