class ChangeIntegerLimitInGetEmployees < ActiveRecord::Migration[6.1]
  def change
    change_column :get_employees, :cellphone, :integer, limit: 8
  end
end
