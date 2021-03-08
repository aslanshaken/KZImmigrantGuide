class CreatePostHouses < ActiveRecord::Migration[6.1]
  def change
    create_table :post_houses do |t|
      t.string :name
      t.string :description
      t.string :city
      t.integer :date_move_in
      t.integer :price
      t.integer :cellphone
      t.string :email
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
