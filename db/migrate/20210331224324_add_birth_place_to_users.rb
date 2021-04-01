class AddBirthPlaceToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :birth_place, :string
  end
end
