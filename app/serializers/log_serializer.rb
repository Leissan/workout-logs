class LogSerializer < ActiveModel::Serializer
  attributes :id, :log_date, :repetition_type, :repetition_count
  belongs_to :user
  belongs_to :exercise, serializer: ExerciseSerializer
end
