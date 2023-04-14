class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]

    # login
    def create
        user = User.find_by(name: params[:name])
        if user&.authenticate(params[:password])
            session[:user_id] =  user.id 
            render json: user, status: :ok
        else 
            render json: { error: ["Incorrect username or password"] }, status: :unauthorized
        end 
    end 

    #logout
    def destroy
        # session.clear
        session.delete :user_id
        head :no_content
    end 

    # private

    # def user_params
    #     params.permit(:name, :password )
    # end 
end
