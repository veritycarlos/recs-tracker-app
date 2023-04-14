class Note < ApplicationRecord
  validates :note, presence: true

  belongs_to :recommendation
end
