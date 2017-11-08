class AddIsadminToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :Isadmin, :boolean
  end
end
