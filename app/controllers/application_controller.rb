class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize

  private

  # def authorize
  #  if !current_user
  #   return render json: {errors: ["Not Authorized"]}, status: :unauthorized unless @current_user
  #  end 
  # end 
  def authorize
    @current_user = User.find_by(id: session[:user_id])
    render json: {errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end 

  # def current_user
  #   User.find_by(id: session[:user_id])
  # end

  # def invalid_response(invalid)
  #   render json: { error: invalid.record.errors.full_messages}, status: :unprocessable_entity
  # end 
  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end 

end
