class LandingPageController < ApplicationController
    def index
        if user_signed_in?
  	    	redirect_to user_panel_path
  	    end
  	    
    end
    
    def find_user
       @user_found = User.find_by(:email => params[:email_to_found]) 
    end
    
    def contact
        
    end
end
