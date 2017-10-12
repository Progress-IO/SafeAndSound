class UserPanelController < ApplicationController
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
  end
end
