# == Schema Information
#
# Table name: tags
#
#  id  :integer          not null, primary key
#  tag :string           not null
#

class Tag < ApplicationRecord
  validates :tag, presence: true, uniqueness: true

  has_many :tags_joins
  has_many :challenges, through: :tags_joins
end
