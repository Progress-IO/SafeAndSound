class UserPanelController < ApplicationController

    before_action :authenticate_user!
    def index

        @temp = Report.show_all
        @suspect_temp = Suspect.show_all
        @transport_temp = Transport.show_all

    end

    def report

    end

    def statistics
        @reports = Report.type_reportCount
        @reports = @reports.to_json.html_safe

        @report_c, @suspect_c = Report.reportSuspect_freq
        @report_c = @report_c.to_json.html_safe
        @suspect_c = @suspect_c.to_json.html_safe

    end

    def view_all
        @reports = current_user.reports
        @suspects = current_user.suspects
        @routes = current_user.routes
    end
end
