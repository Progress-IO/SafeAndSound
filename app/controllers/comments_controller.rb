class CommentsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    @commentable = @reports.find(params[:report_id])
    @comments = @commentable.comments
  end

  def new
  end
end
