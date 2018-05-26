class CreateSecurityNews < ActiveRecord::Migration[5.1]
  def change
    create_table :security_news do |t|
      t.string :tipo
      t.date :dia
      t.float :latitude
      t.float :longitude
      t.string :address
      t.string :details

      t.timestamps
    end
  end
end
