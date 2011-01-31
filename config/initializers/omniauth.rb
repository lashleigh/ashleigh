Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, 'VQne06AhaTDmlB5widjNZA', 'IHBQELwXQxsu7q3RQNiu2PENHdrMIJWUz9IFF4VWPHU'
  #provider :facebook, 'APP_ID', 'APP_SECRET'
  #provider :linked_in, 'CONSUMER_KEY', 'CONSUMER_SECRET'
end
