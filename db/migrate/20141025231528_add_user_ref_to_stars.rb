class AddUserRefToStars < ActiveRecord::Migration
  def change
    add_reference :stars, :user, index: true
  end
end
