class Api::SavedfilesController < ApplicationController
  def create
    @saved_file = SavedFile.create(savedFilesParams())
    render :show
  end


  private

  def savedFilesParams
    params.require(:saved_file).permit(:user_id, :challenge_id, :content)
  end
end
