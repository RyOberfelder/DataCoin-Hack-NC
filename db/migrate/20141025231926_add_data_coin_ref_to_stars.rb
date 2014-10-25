class AddDataCoinRefToStars < ActiveRecord::Migration
  def change
    add_reference :stars, :data_coins, index: true
  end
end
