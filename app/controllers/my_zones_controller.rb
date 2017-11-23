class MyZonesController < ApplicationController
    before_action :set_my_zone, only: [:show, :edit, :update, :destroy]

    # GET /my_zones
    # GET /my_zones.json
    def index
        @my_zones = MyZone.all
    end

    # GET /my_zones/1
    # GET /my_zones/1.json
    def show
        @reports = MyZone.near_crimes(@my_zone)
    end
    # GET /my_zones/new
    def new
        @my_zone = MyZone.new
    end

    # GET /my_zones/1/edit
    def edit
    end

    # POST /my_zones
    # POST /my_zones.json
    def create
        @my_zone = current_user.my_zones.new(my_zone_params)
        # @my_zone = MyZone.new(my_zone_params)

        respond_to do |format|
            if @my_zone.save
                format.html { redirect_to @my_zone, notice: 'My zone was successfully created.' }
                format.json { render :show, status: :created, location: @my_zone }
            else
                format.html { render :new }
                format.json { render json: @my_zone.errors, status: :unprocessable_entity }
            end
        end
    end

    # PATCH/PUT /my_zones/1
    # PATCH/PUT /my_zones/1.json
    def update
        respond_to do |format|
            if @my_zone.update(my_zone_params)
                format.html { redirect_to @my_zone, notice: 'My zone was successfully updated.' }
                format.json { render :show, status: :ok, location: @my_zone }
            else
                format.html { render :edit }
                format.json { render json: @my_zone.errors, status: :unprocessable_entity }
            end
        end
    end

    # DELETE /my_zones/1
    # DELETE /my_zones/1.json
    def destroy
        @my_zone.destroy
        respond_to do |format|
            format.html { redirect_to my_zones_url, notice: 'My zone was successfully destroyed.' }
            format.json { head :no_content }
        end
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_my_zone
        @my_zone = MyZone.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def my_zone_params
        params.require(:my_zone).permit(:name, :latitude, :longitude, :radius, :color)
    end
end
