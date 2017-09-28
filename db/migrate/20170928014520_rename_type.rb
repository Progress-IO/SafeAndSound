class RenameType < ActiveRecord::Migration[5.1]
  def change
    rename_column :reports, :type, :tipo
  end
end
