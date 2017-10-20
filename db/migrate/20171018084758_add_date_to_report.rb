class AddDateToReport < ActiveRecord::Migration[5.1]
  def change
    add_column :reports, :dia, :date
  end
end
