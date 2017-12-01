class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if !@user.save
      render json: @user.errors.full_messages, status: 401
    else
      login!(@user)
      render :login
    end
  end

  def show
    @user = User.includes(:completed_challenges).find(params[:id])
    @challenges = Challenge.all
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
