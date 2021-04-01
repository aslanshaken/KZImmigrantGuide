class AddTitleToPostByEmployees < ActiveRecord::Migration[6.1]
  def change
    add_column :post_by_employees, :title, :string
  end
end
