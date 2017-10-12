class AddImagesToSuspects < ActiveRecord::Migration[5.1]
  def change
    add_column :suspects, :images, :string
  end
end
