class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.string :note
      t.belongs_to :recommendation, null: false, foreign_key: true

      t.timestamps
    end
  end
end
