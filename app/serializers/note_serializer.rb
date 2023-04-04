class NoteSerializer < ActiveModel::Serializer
  attributes :id, :note
  has_one :recommendation
end
