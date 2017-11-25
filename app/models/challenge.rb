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

class Challenge < ApplicationRecord
  validates :language_id, :title, :skeleton, :solution, presence: true

  belongs_to :language
  has_many :tags_joins
  has_many :tags, through: :tags_joins
end
