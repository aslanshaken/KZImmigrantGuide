class CreatePostByEmployees < ActiveRecord::Migration[6.1]
  def change
    create_table :post_by_employees do |t|
      t.string :name
      t.string :about
      t.string :category
      t.string :city
      t.string :cellphone
      t.string :email
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
