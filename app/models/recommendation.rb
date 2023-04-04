class Recommendation < ApplicationRecord
  belongs_to :user
  belongs_to :category

  has_many :notes
end
