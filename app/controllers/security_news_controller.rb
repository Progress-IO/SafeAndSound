class SecurityNewsController < ApplicationController
  before_action :set_security_news, only: [:show, :edit, :update, :destroy]

  # GET /security_news
  # GET /security_news.json
  def index
    @security_news = SecurityNews.all
  end

  # GET /security_news/1
  # GET /security_news/1.json
  def show
  end

  # GET /security_news/new
  def new
    @security_news = SecurityNews.new
  end

  # GET /security_news/1/edit
  def edit
  end

  # POST /security_news
  # POST /security_news.json
  def create
    @security_news = SecurityNews.new(security_news_params)

    respond_to do |format|
      if @security_news.save
        format.html { redirect_to @security_news, notice: 'Security news was successfully created.' }
        format.json { render :show, status: :created, location: @security_news }
      else
        format.html { render :new }
        format.json { render json: @security_news.errors, status: :unprocessable_entity }
      end

    end


  end

  # PATCH/PUT /security_news/1
  # PATCH/PUT /security_news/1.json
  def update
    respond_to do |format|
      if @security_news.update(security_news_params)
        format.html { redirect_to @security_news, notice: 'Security news was successfully updated.' }
        format.json { render :show, status: :ok, location: @security_news }
      else
        format.html { render :edit }
        format.json { render json: @security_news.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /security_news/1
  # DELETE /security_news/1.json
  def destroy
    @security_news.destroy
    respond_to do |format|
      format.html { redirect_to security_news_index_url, notice: 'Security news was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_security_news
      @security_news = SecurityNews.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def security_news_params
      params.require(:security_news).permit(:tipo, :dia, :latitude, :longitude, :address, :details)
    end

    def search_protected

    end

end
