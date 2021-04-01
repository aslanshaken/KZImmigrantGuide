class AddBathroomToPostHouses < ActiveRecord::Migration[6.1]
  def change
    add_column :post_houses, :bathroom, :string
  end
end
