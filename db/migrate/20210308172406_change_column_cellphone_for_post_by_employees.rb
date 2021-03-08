class ChangeColumnCellphoneForPostByEmployees < ActiveRecord::Migration[6.1]
  def change
    change_column(:post_by_employees, :cellphone, :integer, using:'cellphone::integer' )
  end
end
