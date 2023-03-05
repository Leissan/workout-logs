class LogSerializer < ActiveModel::Serializer
  attributes :id, :log_date, :repetition_type, :repetition_count
end
