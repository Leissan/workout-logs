class ExercisesController < ApplicationController

    #

      def index
        exercises = Exercise.all
        render json: exercises, status: :ok
      end
    
      def show
        render json: exercise, status: :ok
      end
    
      # def update
      #   exercise.update(exercise_params)
      # end
    
      def create
        exercise = Exercise.create(exercise_params)
        render json: exercise, status: :ok
      end
    
      # def destroy
      #   exercise.destroy
      # end
    
      private
    
      def exercise
        Exercise.find(params[:id])
      end
    
      def exercise_params
        params.permit(:title, :description)
      end
end
