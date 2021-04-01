class AddStateToPostHouses < ActiveRecord::Migration[6.1]
  def change
    add_column :post_houses, :state, :string
  end
end
