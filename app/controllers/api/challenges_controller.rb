class Api::ChallengesController < ApplicationController

  def index
    @challenges = Challenge.all.includes(:tags)
    render :index
  end

  def show
    @challenge = Challenge.find(params[:id])
    render :show
  end
end
