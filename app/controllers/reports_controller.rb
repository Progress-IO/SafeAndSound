class ReportsController < ApplicationController
    before_action :set_report, only: [:show, :edit, :update, :destroy]
    before_action :authenticate_user!

    # GET /reports
    # GET /reports.json
    def index
        redirect_to view_all_path
        # @reports = Report.user_reports
    end

    # GET /reports/1
    # GET /reports/1.json
    def show
         set_report
        @commentable = @report
        @comments = @commentable.comments
        @comment = Comment.new
        respond_to do |format|
            format.html
            format.pdf do
                render  pdf: "show",
                :footer => {
                    :html => {
                        :template => 'layouts/pdf-footer.html'
                    }
                }
            end
        end
    end

    # GET /reports/new
    def new
        # _layout "test"
        @report = Report.new
    end

    

    # GET /reports/1/edit
    def edit
    end


    # POST /reports
    # POST /reports.json
    def create
        @report = current_user.reports.new(report_params)
        # @report = Report.new(report_params)
        if @report.valid?
            s_dia = report_params[:dia].split(' ')
            s_hora = report_params[:hora].split(':')
            @fecha_aux = DateTime.new(s_dia[2].to_i, Date::MONTHNAMES.index(s_dia[1].delete(',')), s_dia[0].to_i, s_hora[0].to_i, s_hora[1].to_i, 0, Time.zone.name)
            @report.update_attributes(:fecha => @fecha_aux)
        end
        respond_to do |format|
            if @report.save
                format.html { redirect_to @report, notice: 'Report was successfully created.' }
                format.json { render :show, status: :created, location: @report }
            else
                format.html { render :new }
                format.json { render json: @report.errors, status: :unprocessable_entity }
            end
        end
    end

    # PATCH/PUT /reports/1
    # PATCH/PUT /reports/1.json
    def update
        respond_to do |format|
            if @report.update(report_params)
                format.html { redirect_to @report, notice: 'Report was successfully updated.' }
                format.json { render :show, status: :ok, location: @report }
            else
                format.html { render :edit }
                format.json { render json: @report.errors, status: :unprocessable_entity }
            end
        end
    end

    # DELETE /reports/1
    # DELETE /reports/1.json
    def destroy
        @report.destroy
        respond_to do |format|
            format.html { redirect_to reports_url, notice: 'Report was successfully destroyed.' }
            format.json { head :no_content }
        end
    end



    private
    # Use callbacks to share common setup or constraints between actions.
    def set_report
        @report = Report.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def report_params
        params.require(:report).permit(:fecha, :tipo, :latitude, :longitude, :address, :details, {images: []},:dia ,:hora, :tipo_transp, :id_route)
    end

end
