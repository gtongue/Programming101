class CreateSavedFiles < ActiveRecord::Migration[5.1]
  def change
    create_table :saved_files do |t|
      t.integer :user_id, null: false
      t.integer :challenge_id
      t.text :content, default: ""
      t.timestamps
    end
    add_index :saved_files, :user_id
    add_index :saved_files, :challenge_id
  end
end
