class UserPanelController < ApplicationController
  
  before_action :authenticate_user!
  def index
      @temp = Report.show_all
      @suspect_temp = Suspect.show_all
      @transport_temp = Transport.show_all 
     
      puts @transport_temp
  end

  def report

  end

  def statistics
      @report = Report.show_all
      @suspect = Suspect.show_all
  end
end
