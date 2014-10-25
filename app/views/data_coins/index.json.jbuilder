json.array!(@data_coins) do |data_coin|
  json.extract! data_coin, :id, :name
  json.url data_coin_url(data_coin, format: :json)
end
