class RecommendationSerializer < ActiveModel::Serializer
  attributes :id, :name, :year, :info, :category_id

  has_many :notes
  belongs_to :category
end
