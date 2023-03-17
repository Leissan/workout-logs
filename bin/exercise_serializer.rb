class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :logs
  has_many :logs
end
