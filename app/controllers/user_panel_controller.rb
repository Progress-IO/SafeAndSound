class UserPanelController < ApplicationController
  def index
      @temp = Report.all
      puts "Hello asdasdaosdkaosdk"
      puts @temps
  end
end
