class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if !@user.save
      render json: @user.errors.full_messages, status: 401
    else
      login!(@user)
      render :show
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
