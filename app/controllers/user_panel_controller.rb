class UserPanelController < ApplicationController

    before_action :authenticate_user!
    before_action :is_user?

    def index
        if current_user.email  == "admin@safeandsound.com"
            current_user.Isadmin= true
            current_user.save
        end
        @temp = Report.show_all
        @suspect_temp = Suspect.show_all
        # @transport_temp = Report.only_transport
        @routes = Route.show_all
        @security = SecurityNews.show_all 
        @reports = Report.paginate(page: params[:page], per_page: 5).order('created_at DESC')
        @transports = Transport.paginate(page: params[:page], per_page: 5).order('created_at DESC')
        @suspects = Suspect.paginate(page: params[:page], per_page: 5).order('created_at DESC')
        
        respond_to do |format|
          format.html
          format.js
        end
    end

    def select_type
        respond_to do |format|
            format.html
            format.js
        end
    end

    def report
        respond_to do |format|
            format.html
            format.js
        end
    end

    def status
        @r_crimen_suspect = Report.crime_n_suspect

        keyword = params[:data]
        address = params[:address]
        sort_by = params[:sort_by]
        reverse = params[:reverse]

        res = Report.search_keyword_with_suspect(keyword, sort_by, reverse, address)

        respond_to do |format|
            format.html {render "status"}
            format.json {render json: res.to_json.html_safe}
        end
    end



    def statistics
        @reports = Report.type_reportCount
        @reports = @reports.to_json.html_safe

        @report_c, @suspect_c = Report.reportSuspect_freq
        @transport_c = Report.lines_freq

        @report_c = @report_c.to_json.html_safe
        @suspect_c = @suspect_c.to_json.html_safe
        @transport_c = @transport_c.to_json.html_safe

        respond_to do |format|
            format.html
            format.pdf do
                render template: "user_panel/pdf.html.erb",
                pdf:"pdf",
                javascript_delay: 500,
                :footer => {
                    :html => {
                        :template => 'layouts/pdf-footer.html'
                    }
                }
            end
        end
    end

    def view_all
        @reports = current_user.reports
        @suspects = current_user.suspects
        @routes = current_user.routes
        @routes_modes = current_user.routes.distinct.pluck(:mode)

        keyword = params[:data]
        address = params[:address]
        sort_by = params[:sort_by]
        reverse = params[:reverse]
        type = params[:type]

        if type == "reports"
            res = Report.search_keyword(keyword, sort_by, reverse, address)
        elsif type == "suspects"
            res = Suspect.search_keyword(keyword, sort_by, reverse, address)
        elsif type == "routes"
            res = Route.search_keyword(keyword, sort_by, reverse, address)
        end

        respond_to do |format|
            format.html {render "view_all"}
            format.json {render json: res.to_json.html_safe}
        end
    end
    
   
   
end
