class GamesController < ApplicationController
  def create
    @game = Game.create(game_params)
  end

  def new
    @game = Game.new
  end

  def show
    @game = Game.find params[:id]

    match = Match.find(@game.match_id)
    @player1_name = match.players[0].name
    @player2_name = match.players[1].name
  end

  def update
    @game = Game.find params[:id]

    @game.update_attributes(game_params)
  end

  private
  def game_params
    params.require(:game).permit(
      :id,
      :team_1_score,
      :team_2_score,
      :match_id
    )
  end

end
