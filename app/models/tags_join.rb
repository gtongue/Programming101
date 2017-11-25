# == Schema Information
#
# Table name: tags_joins
#
#  id           :integer          not null, primary key
#  challenge_id :integer          not null
#  tag_id       :integer          not null
#

class TagsJoin < ApplicationRecord
  validates :challenge_id, :tag_id, presence: true

  belongs_to :challenge
  belongs_to :tag
end
