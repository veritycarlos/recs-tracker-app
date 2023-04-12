class RecommendationsController < ApplicationController
    wrap_parameters format: []

    def index
        if params[:category_id]
            category = Category.find(params[:category_id])
            recommendations = category.recommendations
        else
            recommendations = Recommendation.all
        end
        render json: recommendations
    end 
    
    def show
        if params[:category_id]
            category = Category.find(params[:category_id])
            recommendations = category.tips
        else
            recommendations = Recommendation.all
        end
        render json: recommendations
    end 

    def create
        recommendation = current_user.recommendations.create!(recommendations_params)
        render json: recommendation, status: :created
    end


    private

    def recommendation_params
        params.permit(:name, :year, :category_id, :user_id)
    end
end
