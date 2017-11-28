class CreateCompletedChallenges < ActiveRecord::Migration[5.1]
  def change
    create_table :completed_challenges do |t|
      t.integer :user_id, null: false
      t.integer :challenge_id, null: false
      t.timestamps
    end
    add_index :completed_challenges, :user_id
    add_index :completed_challenges, :challenge_id
  end
end
