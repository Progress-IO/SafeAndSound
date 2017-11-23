class AddUserIdToMyZones < ActiveRecord::Migration[5.1]
  def change
      add_column :my_zones, :user_id, :integer
      add_index :my_zones, :user_id
  end
end
