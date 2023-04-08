class UsersController < ApplicationController
    # skip_before_action :authorize, only: [:create]
    #This will make everything in the application require
    #the user to be logged in to use it. For obvious reasons 
    #(the user wouldn't be able to log in in the first place!), 
    #not all controllers or actions should require this. 
    #You can prevent this filter from running before particular 
    #actions with skip_before_action:

    def index
        users = User.all
        render json: users
    end  

    def show
        # user = User.find_by(id: params[:id])
        # render json: user
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, include: :tips
        else
            render json: { error: "User not found" }, status: :unauthorized 
        end
    end

    def create
        # @user = User.new
        user = User.create(user_params) 
        if user.valid?
            session[:user_id] = user.id 
            render json: user
        else 
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity  
        end 
    end 

    private

    def user_params
        params.permit(:username, :password)
    end 

end