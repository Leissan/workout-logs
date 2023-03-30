class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :logs
  has_many :logs #its giving me all logs from all users; how do i specify current_user
  has_many :users, through: :logs       
end
