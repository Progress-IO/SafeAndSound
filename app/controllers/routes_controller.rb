class RoutesController < ApplicationController
  # respond_to :html , :js
  before_action :set_route, only: [:show, :edit, :update, :destroy]
  before_action :view_admin?

  # GET /routes
  # GET /routes.json
  def index
    @routes = current_user.routes
   
    # @routes = Route.all
  end

  # GET /routes/1
  # GET /routes/1.json
  def show
    respond_to do |format|
      format.html
      format.js
    end
  end

  # GET /routes/new
  def new
    @route = Route.new
    @reports_position = Route.Reports_position.to_json.html_safe

    puts "My reports: ", @reports_position
    @transport_routes = Report.only_transport.to_json.html_safe
    respond_to do |format|
      format.html
      format.js
      format.pdf do
        render pdf: "new",
         javascript_delay: 5000,
        :footer => {
          :html => {
            :template => 'layouts/pdf-footer.html'
          }

        }
      end
    end
  end

  # GET /routes/1/edit
  def edit
     redirect_to action: "index"
  end

  # POST /routes
  # POST /routes.json
  def create
    # @route = Route.new(route_params)
    @route = current_user.routes.new(route_params)

    respond_to do |format|
      if @route.save
        format.html { redirect_to @route, notice: 'Route was successfully created.' }
        format.json { render :show, status: :created, location: @route }
      else
        format.html { render :new }
        format.json { render json: @route.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /routes/1
  # PATCH/PUT /routes/1.json
  def update
    respond_to do |format|
      if @route.update(route_params)
        format.html { redirect_to @route, notice: 'Route was successfully updated.' }
        format.json { render :show, status: :ok, location: @route }
      else
        format.html { render :edit }
        format.json { render json: @route.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /routes/1
  # DELETE /routes/1.json
  def destroy
    @route.destroy
    respond_to do |format|
      format.html { redirect_to routes_url, notice: 'Route was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_route
      @route = Route.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def route_params
      params.require(:route).permit(:origin_latitude, :origin_longitude, :destination_latitude, :destination_longitude, :date, :route, :mode, :response, :route_index)
    end

    def view_admin?
      redirect_to admin_admins_path if current_user.Isadmin? 
    end
   

end
