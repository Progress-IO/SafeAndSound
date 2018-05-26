class CreateTransports < ActiveRecord::Migration[5.1]
  def change
    create_table :transports do |t|
      t.datetime :fecha
      t.string :tipo
      t.time :hora
      t.date :dia
      t.string :detalles
      t.float :longitude
      t.float :latitude
      t.string :address
      t.string :tipo_transp
      t.string :images

      t.timestamps
    end
  end
end
