class CreateReports < ActiveRecord::Migration[5.1]
  def change
    create_table :reports do |t|
      t.datetime :fecha
      t.string :tipo
      t.float :latitude
      t.float :longitude
      t.string :address
      t.string :details

      t.timestamps
    end
  end
end
