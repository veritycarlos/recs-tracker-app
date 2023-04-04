class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    #This will make everything in the application require
    #the user to be logged in to use it. For obvious reasons 
    #(the user wouldn't be able to log in in the first place!), 
    #not all controllers or actions should require this. 
    #You can prevent this filter from running before particular 
    #actions with skip_before_action:

    def index
    end 

    def show
    end

    def create
    end 

    private

    def user_params
    end 

end
