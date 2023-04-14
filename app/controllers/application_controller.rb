class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :invalid_response
  rescue_from ActiveRecord::RecordNotFound, with: :no_route

  before_action :authorize

  private

  def authorize
   if !current_user
    return render json: {errors: ["Not Authorized"]}, status: :unauthorized
   end 
  end 

  def current_user
    User.find_by(id: session[:user_id])
  end

  def invalid_response(invalid)
    render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end 

  def no_route
    render json: {error: "Not found"}, status: :not_found
  end

end
