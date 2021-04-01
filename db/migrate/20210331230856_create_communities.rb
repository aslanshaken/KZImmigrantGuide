class CreateCommunities < ActiveRecord::Migration[6.1]
  def change
    create_table :communities do |t|
      t.string :name_community
      t.string :state
      t.string :city
      t.bigint :members_count
      t.string :contact_name
      t.string :contact_email
      t.string :contact_phone
      t.string :facebook
      t.string :telegram
      t.string :whatsapp
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
