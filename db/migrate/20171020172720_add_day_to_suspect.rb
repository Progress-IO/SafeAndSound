class AddDayToSuspect < ActiveRecord::Migration[5.1]
  def change
    add_column :suspects, :dia, :Date
  end
end
