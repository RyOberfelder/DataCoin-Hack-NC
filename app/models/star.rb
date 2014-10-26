class Star < ActiveRecord::Base
  belongs_to :user
  belongs_to :data_coin
  
  validates :user, :presence => true
  validates :data_coin, :presence => true
end
