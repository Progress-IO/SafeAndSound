json.extract! report, :id, :fecha, :tipo, :latitude, :longitude, :address, :details, :created_at, :updated_at
json.url report_url(report, format: :json)
