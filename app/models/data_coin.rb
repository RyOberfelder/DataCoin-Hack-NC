class DataCoin < ActiveRecord::Base
  has_many :stars
  validates :name, presence: true
end
