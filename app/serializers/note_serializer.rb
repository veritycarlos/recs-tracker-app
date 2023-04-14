class NoteSerializer < ActiveModel::Serializer
  attributes :id, :note, :recommendation_id
end
