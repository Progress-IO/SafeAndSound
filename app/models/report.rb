class Report < ApplicationRecord
    # attr_accessible :dia, :hora, :fecha
    mount_uploaders :images, ImageUploader
    serialize :images, JSON # If you use SQLite, add this line.

   

    

end
