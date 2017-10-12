class AddImagesToReports < ActiveRecord::Migration[5.1]
  def change
    add_column :reports, :images, :string
  end
end
