class Category < ApplicationRecord
    has_many :recommendations
    has_many :users, through: :recommendations
end
