class ChangeIntegerLimitInPostByEmployees < ActiveRecord::Migration[6.1]
  def change
    change_column :post_by_employees, :cellphone, :integer, limit: 8
  end
end
