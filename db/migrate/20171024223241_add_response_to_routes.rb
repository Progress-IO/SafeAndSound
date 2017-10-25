class AddResponseToRoutes < ActiveRecord::Migration[5.1]
  def change
      add_column :routes, :response, :json
  end
end
