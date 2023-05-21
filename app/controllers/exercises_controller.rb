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

   
      def my-bycep-exercises
        exercises = current_user.exercises.select do |e|
          e.title.include?("bycep")
        end

        render json: exercises

      end
      private
    
      def exercise
        Exercise.find(params[:id])
      end
    
      def exercise_params
        params.permit(:title, :description)
      end
end
