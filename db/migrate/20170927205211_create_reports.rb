class CreateReports < ActiveRecord::Migration[5.1]
  def change
    create_table :reports do |t|
      t.timestamp :fecha
      t.string :type
      t.float :latitude
      t.float :longitude
      t.string :address
      t.string :details

      t.timestamps
    end
  end
end
