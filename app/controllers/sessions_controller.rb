class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]

    #login
    def create 
    end 

    #logout
    def destroy
    end 

    private

    def user_params
    end 
end
