class Recommendation < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  
  belongs_to :user
  belongs_to :category

  has_many :notes, dependent: :destroy
end
