# == Schema Information
#
# Table name: saved_files
#
#  id           :integer          not null, primary key
#  user_id      :integer          not null
#  challenge_id :integer
#  content      :text             default("")
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class SavedFileTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
