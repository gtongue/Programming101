class Api::SavedfilesController < ApplicationController
  def create
    file_params = savedFilesParams;
    @saved_file = SavedFile.find_by(
      challenge_id: file_params[:challenge_id],
      user_id: file_params[:user_id])
    if(@saved_file)
      @saved_file.update(file_params);
    else
      @saved_file = SavedFile.create(file_params)
    end
    render :show
  end

  def show
    @saved_file = SavedFile.find_by(challenge_id: params[:id])
    render :show
  end

  private

  def savedFilesParams
    params.require(:saved_file).permit(:user_id, :challenge_id, :content)
  end
end
