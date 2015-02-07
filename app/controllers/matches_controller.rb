class MatchesController < ApplicationController

  def index
    @players = Player.all
    @matches = Match.all
  end

  def new
    @match = Match.new
  end

  def update
    @match = Match.find_by_id(params[:id])

    @match.update_attributes({:in_progress => true})
    render json: @match
  end

  def completed
    @matches = Match.where(:completed => true)
  end

  def create
    @match = Match.new

    teams_from_params.each do |team|
      @match.teams << team
    end

    @match.number_of_games = match_params[:number_of_games]

    if @match.save
      render :json => {
        :match => @match,
        :team1 => @match.teams[0].players,
        :team2 => @match.teams[1].players
      }
    else
      render json: @match.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @match = Match.find(params[:id]).destroy
    render json: @match
  end

  def in_progress
    @in_progress = current_match
  end

  private

  def match_params
    params.require(:match).permit(
      :number_of_games,
      :in_progress,
      :names => [],
      :game1 => [:team_1_score, :team_2_score],
      :game2 => [:team_1_score, :team_2_score],
      :game3 => [:team_1_score, :team_2_score],
      )
  end

  def teams_from_params
    teams = []
    names = match_params[:names].reject { |name| name == '' }

    if names.length == 2
      names.each do |name|
        team = Team.new
        player = Player.find_by_name(name) || Player.create({:name => name})

        team.players << player
        teams << team
      end
    elsif names.length == 4
      team1 = Team.new
      team2 = Team.new
      player1 = Player.find_by_name(names[0]) || Player.create({:name => names[0]})
      player2 = Player.find_by_name(names[1]) || Player.create({:name => names[1]})
      player3 = Player.find_by_name(names[2]) || Player.create({:name => names[2]})
      player4 = Player.find_by_name(names[3]) || Player.create({:name => names[3]})

      team1.players << player1
      team1.players << player2
      team2.players << player3
      team2.players << player4

      teams << team1
      teams << team2
    end

    teams
  end

  def pending_matches
    Match.where(:completed => false, :in_progress => false)
  end

  def any_match_already_in_progress?
    Match.all.any? { |match| match.in_progress }
  end

end
