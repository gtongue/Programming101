# == Schema Information
#
# Table name: languages
#
#  id   :integer          not null, primary key
#  name :string           not null
#

class Language < ApplicationRecord
  validates :name, presence: true, uniqueness: true
end
