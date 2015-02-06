require 'app/models/player'

class PlayersController < ApplicationController

  def show
    @players = Player.all
    @player = Player.find(params[:id])
  end

  private
  def player_params
    params.require(:player).permit(:name)
  end
end
