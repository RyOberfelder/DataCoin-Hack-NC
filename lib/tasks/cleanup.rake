namespace :cleanup do
  desc "Delete rows from tables and reset pks"
  task db: :environment do
    User.destroy_all
    DataCoin.destroy_all
    Star.destroy_all
    ActiveRecord::Base.connection.reset_pk_sequence!('users')
    ActiveRecord::Base.connection.reset_pk_sequence!('data_coins')
    ActiveRecord::Base.connection.reset_pk_sequence!('stars')
  end

end
