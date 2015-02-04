class MatchesController < ApplicationController

  def index
    @players = Player.all
    
  end




end
