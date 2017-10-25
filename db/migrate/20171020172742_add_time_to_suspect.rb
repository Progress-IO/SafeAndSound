class AddTimeToSuspect < ActiveRecord::Migration[5.1]
  def change
    add_column :suspects, :hora, :Time
  end
end
