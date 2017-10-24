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
  end
  
  
    
end
