# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_08_172406) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "get_employees", force: :cascade do |t|
    t.string "job_name"
    t.string "category"
    t.string "description"
    t.string "city"
    t.integer "cellphone"
    t.string "email"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_get_employees_on_user_id"
  end

  create_table "post_by_employees", force: :cascade do |t|
    t.string "name"
    t.string "about"
    t.string "category"
    t.string "city"
    t.integer "cellphone"
    t.string "email"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_post_by_employees_on_user_id"
  end

  create_table "post_houses", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "city"
    t.integer "date_move_in"
    t.integer "price"
    t.integer "cellphone"
    t.string "email"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_post_houses_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "get_employees", "users"
  add_foreign_key "post_by_employees", "users"
  add_foreign_key "post_houses", "users"
end
