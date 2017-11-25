# == Schema Information
#
# Table name: challenges
#
#  id          :integer          not null, primary key
#  language_id :integer          not null
#  title       :string           not null
#  skeleton    :text             not null
#  solution    :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class ChallengeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
