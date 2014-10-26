class User < ActiveRecord::Base
  has_many :stars
  validates :username, presence: true
end
