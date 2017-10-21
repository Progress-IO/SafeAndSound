json.extract! transport, :id, :fecha, :tipo, :hora, :dia, :detalles, :longitude, :latitude, :address, :tipo_transp, :images, :created_at, :updated_at
json.url transport_url(transport, format: :json)
