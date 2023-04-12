class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :recommendations
end