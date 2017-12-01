# == Schema Information
#
# Table name: completed_challenges
#
#  id           :integer          not null, primary key
#  user_id      :integer          not null
#  challenge_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class CompletedChallenge < ApplicationRecord
  belongs_to :user
  belongs_to :challenge

end
