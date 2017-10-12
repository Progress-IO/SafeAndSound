class CreateRoutes < ActiveRecord::Migration[5.1]
  def change
    create_table :routes do |t|
      t.float :origin_latitude
      t.float :origin_longitude
      t.float :destination_latitude
      t.float :destination_longitude
      t.datetime :date
      t.string :route
      t.string :mode

      t.timestamps
    end
  end
end
