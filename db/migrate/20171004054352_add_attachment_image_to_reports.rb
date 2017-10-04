class AddAttachmentImageToReports < ActiveRecord::Migration[5.1]
  def self.up
    change_table :reports do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :reports, :image
  end
end
