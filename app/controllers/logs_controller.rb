class LogsController < ApplicationController

   # before_action :authorize

    def index
        logs = Log.where(user_id: current_user.id)
        list = []
    
        logs.each do |log|
          exercise = log.exercise
    
          list << {
            id: log.id,
            title: exercise.title,
            exercise_id: exercise.id,
            description: exercise.description,
            repetition_type: log.repetition_type,
            repetition_count: log.repetition_count,
            log_date: log.log_date,
          }
        end
    
        render json: list
    end
    
    def show
        log = Log.find(params[:id])
        exercise = log.exercise
    
        render json: {
          id: log.id,
          exercise_id: exercise.id,
          title: exercise.title,
          description: exercise.description,
          repetition_type: log.repetition_type,
          repetition_count: log.repetition_count,
          log_date: log.log_date,
        }
    end
    
    def update
        Log.find(params[:id]).update(log_date: DateTime.now, **logs_params)
        render json: log, status: :ok
    end

    
    def create
        log = Log.create(user_id: current_user.id, log_date: DateTime.now, **logs_params)
        render json: log, status: :ok
    end
    
    def destroy
        if log
            log.destroy
            head :no_content
        else
            render json: { error: "Log not found" }, status: :not_found
        end
    
    end

      
    private

    def authorize
        return render json: {error: "Not authorized"}, status: :unauthorized
        unless session.include? :user_id
    end
    
    def log
        #Log.find(params[:id])
        current_user.logs.find(params[:id])
    end
    
    def logs_params
        params.permit(:log_date, :repetition_type, :repetition_count, :exercise_id)
    end  
end
