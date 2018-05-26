class CreateSuspects < ActiveRecord::Migration[5.1]
  def change
    create_table :suspects do |t|
      t.string :nombre
      t.datetime :fecha
      t.float :latitude
      t.float :longitude
      t.string :address
      t.string :details

      t.timestamps
    end
  end
end
