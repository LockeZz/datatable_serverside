class CreateLines < ActiveRecord::Migration[6.1]
  def change
    create_table :lines do |t|
      t.string :season
      t.string :episode
      t.string :character
      t.string :line

      t.timestamps
    end
  end
end
