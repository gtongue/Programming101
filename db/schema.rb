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

ActiveRecord::Schema.define(version: 20171127220252) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "challenges", force: :cascade do |t|
    t.integer "language_id", null: false
    t.string "title", null: false
    t.text "skeleton", null: false
    t.text "solution", null: false
    t.text "description"
    t.text "tests", null: false
    t.text "steps", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["language_id"], name: "index_challenges_on_language_id"
  end

  create_table "completed_challenges", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "challenge_id", null: false
    t.integer "lines_written", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["challenge_id"], name: "index_completed_challenges_on_challenge_id"
    t.index ["user_id"], name: "index_completed_challenges_on_user_id"
  end

  create_table "languages", force: :cascade do |t|
    t.string "name", null: false
    t.index ["name"], name: "index_languages_on_name"
  end

  create_table "saved_files", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "challenge_id"
    t.text "content", default: ""
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["challenge_id"], name: "index_saved_files_on_challenge_id"
    t.index ["user_id"], name: "index_saved_files_on_user_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "tag", null: false
    t.index ["tag"], name: "index_tags_on_tag"
  end

  create_table "tags_joins", force: :cascade do |t|
    t.integer "challenge_id", null: false
    t.integer "tag_id", null: false
    t.index ["challenge_id"], name: "index_tags_joins_on_challenge_id"
    t.index ["tag_id"], name: "index_tags_joins_on_tag_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email"
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["username"], name: "index_users_on_username"
  end

end
