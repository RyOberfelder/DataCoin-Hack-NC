class AddUserReferenceToComment < ActiveRecord::Migration
  def change
    add_reference :comments, :user, index: true
    add_reference :comments, :data_coin, index: true
  end
end
