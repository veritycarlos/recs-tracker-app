class User < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    
    has_secure_password

    has_many :recommendations
    has_many :categories, through: :recommendations

end