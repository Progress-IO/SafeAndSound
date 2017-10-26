class AddUserIdToSuspects < ActiveRecord::Migration[5.1]
  def change
      add_column :suspects, :user_id, :integer
      add_index :suspects, :user_id 
  end
end
