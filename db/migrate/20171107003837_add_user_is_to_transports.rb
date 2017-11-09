class AddUserIsToTransports < ActiveRecord::Migration[5.1]
  def change
    add_column :transports, :user_id, :integer
      add_index :transports, :user_id
  end
end
