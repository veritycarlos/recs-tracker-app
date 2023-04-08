class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]

    #login
    def create 
        def create
            user = User.find_by(username: params[:session][:username])
            if user && user.authenticate(params[:session][:password])
                session[:user_id] =  user.id 
                render json: user, status: :ok
            else 
                render json: { errors: ["Incorrect username or password"] }, status: :unprocessable_entity
            end 
        end 
    end 

    #logout
    def destroy
        # session.clear
        session.delete :user_id
        head :no_content
    end 

    private

    def user_params
        params.permit(:username, :password )
    end 
end
