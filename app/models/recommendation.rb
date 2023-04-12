class Recommendation < ApplicationRecord
  validates :name, presence: true
  
  belongs_to :user
  belongs_to :category

  has_many :notes
end
