class CommentsController < ApplicationController
  before_action :authenticate_user!
  before_action :load_commentable
  def index
    
    @comments = @commentable.comments
  end

  def new
    @comment = @commentable.comments.new
    
  end
  def create
    @comment = @commentable.comments.new(comments_params) 
    @comment.user_id=current_user.id
    if @comment.save
      redirect_to @commentable, notice:"Comentario publicado."
    else
      render :new
    end
  end
  
  
  private
    def load_commentable
      resource, id = request.path.split('/')[1,2]
      @commentable = resource.singularize.classify.constantize.find(id)
    end
    def comments_params
       params.require(:comment).permit(:commentable, :body)
    end
   
  
end
