class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :image_url, :bio
  attribute :all_exercises
  has_many :logs
  has_many :exercises, through: :logs


  def all_exercises
    Exercise.all 
  end
end
