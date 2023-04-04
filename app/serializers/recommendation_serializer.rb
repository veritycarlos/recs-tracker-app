class RecommendationSerializer < ActiveModel::Serializer
  attributes :id, :name, :year, :info
  has_one :user
  has_one :category
end
