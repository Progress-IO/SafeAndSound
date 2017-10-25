class AddTimeToReport < ActiveRecord::Migration[5.1]
  def change
    add_column :reports, :hora, :time
  end
end
