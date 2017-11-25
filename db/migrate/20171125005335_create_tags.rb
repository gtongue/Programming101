class CreateTags < ActiveRecord::Migration[5.1]
  def change
    create_table :tags do |t|
      t.string :tag, null: false, unique: true;
    end
    add_index :tags, :tag
  end
end
