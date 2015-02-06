class GamesController < ApplicationController
  def create
    @game = Game.create(game_params)
  end

  private
  def game_params
    params.require(:game).permit(
      :id,
      :team_1_score,
      :team_2_score,
      :winner,
      :match_id
    )
  end

end
