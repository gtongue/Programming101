class Api::CompletedChallengesController < ApplicationController
  def create
    file_params = challengeParams;
    @completed_challenge = CompletedChallenge.find_by(
      challenge_id: file_params[:challenge_id],
      user_id: file_params[:user_id])
    if(!@completed_challenge)
      @completed_challenge = CompletedChallenge.create(file_params)
    end
    render :show
  end

  def index
    @completed_challenges = CompletedChallenge.order(created_at: :desc)
    render :index
  end

  private
  def challengeParams
    params.require(:completedchallenge).permit(:user_id, :challenge_id, :lines_written)
  end
end
