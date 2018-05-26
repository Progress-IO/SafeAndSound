class CreateMyZones < ActiveRecord::Migration[5.1]
  def change
    create_table :my_zones do |t|
      t.string :name
      t.float :latitude
      t.float :longitude
      t.float :radius
      t.string :color

      t.timestamps
    end
  end
end
