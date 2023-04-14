class RecommendationsController < ApplicationController
    # wrap_parameters format: []

    def index
        recommendations = current_user.recommendations.all
        render json: recommendations, status: :found
    end 

    # def index
    #     if params[:category_id]
    #         category = Category.find(params[:category_id])
    #         recommendations = category.recommendations
    #     else
    #         recommendations = Recommendation.all
    #     end
    #     render json: recommendations
    # end 

    def show
        recommendation = current_user.recommendations.find_by(id: params[:id])
        render json: recommendation, status: :found
    end 
    
    # def show
    #     if params[:category_id]
    #         category = Category.find(params[:category_id])
    #         recommendations = category.tips
    #     else
    #         recommendations = Recommendation.all
    #     end
    #     render json: recommendations
    # end 

    def create
        recommendation = current_user.recommendations.create!(recommendations_params)
        render json: recommendation, status: :created
    end

    def update
        recommendation = current_user.recommendations.find_by(id: params[:id])
        recommendation.update!(recommendations_params)
        render json: recommendation
    end

    def destroy
        recommendation = current_user.recommendations.find_by(id: params[:id])
        recommendation.destroy
        head :no_content
    end 


    private

    def recommendations_params
        params.permit(:name, :year, :info, :category_id)
    end
end
