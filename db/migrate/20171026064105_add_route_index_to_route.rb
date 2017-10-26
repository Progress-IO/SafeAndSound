class AddRouteIndexToRoute < ActiveRecord::Migration[5.1]
  def change
      add_column :routes, :route_index, :integer
  end
end
