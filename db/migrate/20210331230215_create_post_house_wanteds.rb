class CreatePostHouseWanteds < ActiveRecord::Migration[6.1]
  def change
    create_table :post_house_wanteds do |t|
      t.string :name
      t.string :about_me
      t.string :state
      t.string :city
      t.string :date_move_in
      t.string :bathroom
      t.bigint :cellphone
      t.string :email
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
