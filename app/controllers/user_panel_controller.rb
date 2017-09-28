class UserPanelController < ApplicationController
  def index
      @temp = Report.all
  end
end
