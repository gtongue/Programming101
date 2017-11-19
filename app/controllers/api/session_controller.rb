class Api::SessionController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password])
    if @user.nil?
      render json: ["Invalid username or password"], status: 401
    else
      login!(@user)
      render 'api/users/show'
    end
  end


  def destroy
    if current_user
      logout!
      render json: { message: 'Logged out.' }
    else
      render json: ["No user is logged in"], status: 401     
    end
  end
end

