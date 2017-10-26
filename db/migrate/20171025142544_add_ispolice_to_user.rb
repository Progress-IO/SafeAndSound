class AddIspoliceToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :Ispolice, :boolean
  end
end
