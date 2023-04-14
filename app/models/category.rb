class Category < ApplicationRecord
    validates :name, presence: true, uniqueness: true

    has_many :recommendations
    has_many :users, through: :recommendations
end
