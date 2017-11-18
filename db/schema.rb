# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171118004038) do

  create_table "admins", force: :cascade do |t|
    t.string "Name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.index ["email"], name: "index_admins_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true
  end

  create_table "comments", force: :cascade do |t|
    t.string "commentable_type"
    t.integer "commentable_id"
    t.integer "user_id"
    t.text "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "delayed_jobs", force: :cascade do |t|
    t.integer "priority", default: 0, null: false
    t.integer "attempts", default: 0, null: false
    t.text "handler", null: false
    t.text "last_error"
    t.datetime "run_at"
    t.datetime "locked_at"
    t.datetime "failed_at"
    t.string "locked_by"
    t.string "queue"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["priority", "run_at"], name: "delayed_jobs_priority"
  end

  create_table "discussions", force: :cascade do |t|
    t.string "headline"
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.integer "rating"
    t.index ["user_id"], name: "index_discussions_on_user_id"
  end

  create_table "novelties", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reports", force: :cascade do |t|
    t.datetime "fecha"
    t.string "tipo"
    t.float "latitude"
    t.float "longitude"
    t.string "address"
    t.string "details"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "images"
    t.date "dia"
    t.time "hora"
    t.integer "user_id"
    t.string "tipo_transp"
    t.index ["user_id"], name: "index_reports_on_user_id"
  end

# Could not dump table "routes" because of following StandardError
#   Unknown type 'json' for column 'response'

  create_table "security_news", force: :cascade do |t|
    t.string "tipo"
    t.date "dia"
    t.float "latitude"
    t.float "longitude"
    t.string "address"
    t.string "details"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "suspects", force: :cascade do |t|
    t.string "nombre"
    t.datetime "fecha"
    t.float "latitude"
    t.float "longitude"
    t.string "address"
    t.string "details"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "images"
    t.date "dia"
    t.time "hora"
    t.integer "user_id"
    t.index ["user_id"], name: "index_suspects_on_user_id"
  end

  create_table "transports", force: :cascade do |t|
    t.datetime "fecha"
    t.string "tipo"
    t.time "hora"
    t.date "dia"
    t.string "detalles"
    t.float "longitude"
    t.float "latitude"
    t.string "address"
    t.string "tipo_transp"
    t.string "images"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "id_route"
    t.integer "user_id"
    t.index ["user_id"], name: "index_transports_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "provider"
    t.string "uid"
    t.string "username"
    t.string "avatar"
    t.text "description"
    t.boolean "Ispolice"
    t.boolean "Isadmin"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
