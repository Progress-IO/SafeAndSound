class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :set_current_user
  
  def after_sign_in_path_for(resource)
    user_root_path
  end
  
 
  
  
  protected
  def configure_permitted_parameters
    added_attrs = [:username, :email, :password, :password_confirmation, :remember_me]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
  end
  
  def current_user?(user)
    current_user.id == user.id
  end
    
  helper_method :current_user?

  def is_admin?
    # check if user is a admin
    redirect_to root_path unless current_user.Isadmin? 
  end

  def is_user?
    # check if user is a admin
    redirect_to admin_reports_path unless !current_user.Isadmin? 
  end

  def set_current_user
    User.current_user = current_user
  end

end
