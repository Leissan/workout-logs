class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :logs
  has_many :logs #its giving me all logs from all users; how do i specify current_user
  has_many :users, through: :logs   
  #has_many :users    

  def logs
    logs_relation = object.logs.where(user_id: @instance_options[:scope].id, exercise_id: object.id)
    ActiveModelSerializers::SerializableResource.new(logs_relation, each_serializer: SuperLogSerializer).as_json
  end
end
