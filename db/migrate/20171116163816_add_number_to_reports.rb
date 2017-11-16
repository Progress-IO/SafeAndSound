class AddNumberToReports < ActiveRecord::Migration[5.1]
  def change
    add_column :reports, :id_route, :string
  end
end
