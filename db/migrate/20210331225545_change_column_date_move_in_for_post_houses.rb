class ChangeColumnDateMoveInForPostHouses < ActiveRecord::Migration[6.1]
  def change
    change_column :post_houses, :date_move_in, :string

  end
end
