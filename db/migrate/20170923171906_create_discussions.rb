class CreateDiscussions < ActiveRecord::Migration[5.1]
  def change
    create_table :discussions do |t|
      t.string :headline
      t.text :content

      t.timestamps
    end
  end
end
