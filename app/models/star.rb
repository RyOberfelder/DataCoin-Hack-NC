class Star < ActiveRecord::Base
  belongs_to :user
  belongs_to :data_coin
end
