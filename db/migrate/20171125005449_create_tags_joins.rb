class CreateTagsJoins < ActiveRecord::Migration[5.1]
  def change
    create_table :tags_joins do |t|
      t.integer :challenge_id, null: false
      t.integer :tag_id, null: false
    end
    add_index :tags_joins, :challenge_id
    add_index :tags_joins, :tag_id
  end
end
