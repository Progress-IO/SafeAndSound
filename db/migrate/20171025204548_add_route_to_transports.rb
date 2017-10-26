class AddRouteToTransports < ActiveRecord::Migration[5.1]
  def change
    add_column :transports, :id_route, :string
  end
end
