class CreateNovelties < ActiveRecord::Migration[5.1]
  def change
    create_table :novelties do |t|

      t.timestamps
    end
  end
end
