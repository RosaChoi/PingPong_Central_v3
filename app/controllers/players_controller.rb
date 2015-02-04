class PlayersController < ApplicationController

  def show
    @player = Player.find(params[:id])
  end

  private
  def player_params
    params.require(:player).permit(:name)
  end
end
