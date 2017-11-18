class AddRatingToDiscussions < ActiveRecord::Migration[5.1]
  def change
    add_column :discussions, :rating, :integer
  end
end
