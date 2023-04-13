class ExercisesController < ApplicationController
  
      def index
        exercises = Exercise.all
        render json: exercises, status: :ok
      end
    
      def show
        render json: exercise, status: :ok
      end
    
     
      def create
        exercise = Exercise.create(exercise_params)
        render json: exercise, status: :ok
      end
    
    
      private
    
      def exercise
        Exercise.find(params[:id])
      end
    
      def exercise_params
        params.permit(:title, :description)
      end
end
