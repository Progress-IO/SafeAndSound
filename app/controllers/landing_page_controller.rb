class LandingPageController < ApplicationController
    def index
        if user_signed_in?
  	    	redirect_to user_panel_path
  	    end
  	    
    end
    
    
    def contact
        
    end
end
