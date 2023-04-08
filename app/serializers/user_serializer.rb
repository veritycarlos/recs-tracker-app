class UserSerializer < ActiveModel::Serializer
  #customize the JSON that we return.
  # 
  attributes :id, :name, :password_digest
end
