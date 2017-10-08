class UserPanelController < ApplicationController
  
  before_action :authenticate_user!
  def index
      @temp = Report.all
  end
end
