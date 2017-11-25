class CreateChallenges < ActiveRecord::Migration[5.1]
  def change
    create_table :challenges do |t|
      t.integer :language_id, null: false
      t.string :title, null: false
      t.text :skeleton, null: false
      t.text :solution, null: false
      t.timestamps
    end
    add_index :challenges, :language_id
  end
end
