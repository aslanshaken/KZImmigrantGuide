class ChangeColumnCellphoneForGetEmployees < ActiveRecord::Migration[6.1]
  def change
    change_column(:get_employees, :cellphone, :integer, using:'cellphone::integer' )
  end
end
