class RenameScoreColumns < ActiveRecord::Migration
  def change
    rename_column :games, :player_1_score, :team_1_score
    rename_column :games, :player_2_score, :team_2_score
  end
end
