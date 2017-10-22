module UsersHelper
    def avatar_for(user, options= {size:50})
        size= options[:size]
        if user.avatar?
            image_tag user.avatar.url(:small), width: size, class:"avatar-image"
            
        else
            image_tag "avatar.png", width: size, class:"avatar-image"
            
        end
    end
end
