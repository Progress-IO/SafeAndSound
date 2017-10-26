class Discussion < ApplicationRecord
    belongs_to :user
    
    
    def last_discussions
        Discussion.count(:conditions => created_at: (Time.now.midnight - 100.days)..Time.now.midnight
        
        Discussion.count(:conditions =>  "user_id = 1")
    end
    
    def most_active_user
    Discussion.left_outer_joins(:user).distinct.select('users.*, COUNT(discussions.*) AS discussions_count').group('user.id')
    end
    
    def
        User.left_outer_joins(:discussions).distinct.select('users.*, COUNT(discussions.*) AS posts_count').group('users.id')
    end
end
