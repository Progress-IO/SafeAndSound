json.extract! route, :id, :origin_latitude, :origin_longitude, :destination_latitude, :destination_longitude, :date, :route, :mode, :created_at, :updated_at
json.url route_url(route, format: :json)
