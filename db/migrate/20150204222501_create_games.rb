class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :player_1_score, default: 0
      t.integer :player_2_score, default: 0
      t.boolean :completed, default: false
      t.integer :match_id

      t.timestamps null: false
    end
  end
end
