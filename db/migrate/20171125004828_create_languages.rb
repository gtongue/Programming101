class CreateLanguages < ActiveRecord::Migration[5.1]
  def change
    create_table :languages do |t|
      t.string :name, null: false, unique: true
    end
    add_index :languages, :name
  end
end
