class AddDataToDataCoin < ActiveRecord::Migration
  def change
    add_column :data_coins, :data, :decimal
  end
end
