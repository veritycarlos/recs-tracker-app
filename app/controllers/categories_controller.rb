class CategoriesController < ApplicationController

    # def index
    #     categories = Category.all
    #     render json: categories
    # end 
    # .order(:name)
    def index
        categories = current_user.categories.all
        render json: categories, status: :found
    end

    def all
        categories = Category.all.order(:name)
        render json: categories, status: :found
    end

    def create
        category = Category.create!(category_params)
        render json: category, status: :created 
    end 

    def show
        category = Category.find_by(id: params[:id])
        render json: category, status: :found

    end 

    # def destroy
    #     category = Category.find_by(id: params[:id])
    #     if category
    #         category.destroy
    #         head :no_content
    #     else
    #         render json: { error: "Not found" }, status: :not_found
    #     end
    # end 

    # def update
    #     category = Category.find_by(id: params[:id])
    #     category.update(category_params)
    #     render json: category
    # end

    private

    def category_params
        params.permit(:name)
    end

end
