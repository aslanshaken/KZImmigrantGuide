class AddCellPhoneToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :cell_phone, :bigint
  end
end
