json.extract! security_news, :id, :tipo, :dia, :latitude, :longitude, :address, :details, :created_at, :updated_at
json.url security_news_url(security_news, format: :json)
