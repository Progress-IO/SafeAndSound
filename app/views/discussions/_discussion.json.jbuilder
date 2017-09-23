json.extract! discussion, :id, :headline, :content, :created_at, :updated_at
json.url discussion_url(discussion, format: :json)
