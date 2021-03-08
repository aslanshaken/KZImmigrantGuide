class CreateGetEmployees < ActiveRecord::Migration[6.1]
  def change
    create_table :get_employees do |t|
      t.string :job_name
      t.string :category
      t.string :description
      t.string :city
      t.string :cellphone
      t.string :email
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
