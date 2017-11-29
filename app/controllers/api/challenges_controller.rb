class Api::ChallengesController < ApplicationController

  def index
    @challenges = Challenge.all.includes(:tags, :language)
    render :index
  end

  def show
    @challenge = Challenge.find(params[:id])
    @saved_file = current_user.saved_files.find_by(challenge_id: params[:id])
    render :show
  end
end
