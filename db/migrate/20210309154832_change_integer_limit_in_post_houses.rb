class ChangeIntegerLimitInPostHouses < ActiveRecord::Migration[6.1]
  def change
    change_column :post_houses, :cellphone, :integer, limit: 8
  end
end
