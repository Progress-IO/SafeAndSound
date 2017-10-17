class UserPanelController < ApplicationController
  
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
      respond_to do |format|
        format.html
        format.pdf do
          render template: "user_panel/pdf.html.erb",
          pdf:"pdf",
          javascript_delay: 5000
        end
      end
  end
end
