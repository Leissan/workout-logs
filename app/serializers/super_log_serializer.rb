class SuperLogSerializer < ActiveModel::Serializer
  attributes :id, :log_date, :repetition_type, :repetition_count, :exercise_id, :user_id
end
