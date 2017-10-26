class SecurityNewsController < ApplicationController
 # GET /noveltys
  # GET /noveltys.json
  def index
    @novelties = Novelty.getAll
  end


  def new
    @novelty = Novelty.new
  end

  def create
    @novelty = Novelty.new(novelty_params)
    s_dia = novelty_params[:dia].split(' ')
    s_hora = novelty_params[:hora].split(':')
    @fecha_aux = DateTime.new(s_dia[2].to_i, Date::MONTHNAMES.index(s_dia[1].delete(',')), s_dia[0].to_i, s_hora[0].to_i, s_hora[1].to_i, 0, Time.zone.name)
    @novelty.update_attributes(:fecha => @fecha_aux)
    respond_to do |format|
      if @novelty.save
        format.html { redirect_to @novelty, notice: 'Novelty was successfully created.' }
        format.json { render :show, status: :created, location: @novelty }
      else
        format.html { render :new }
        format.json { render json: @novelty.errors, status: :unprocessable_entity }
      end
    end
  end

end
