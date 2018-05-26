class AddTipoTranspToReports < ActiveRecord::Migration[5.1]
  def change
    add_column :reports, :tipo_transp, :string
  end
end
