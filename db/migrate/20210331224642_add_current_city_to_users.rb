class AddCurrentCityToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :current_city, :string
  end
end
