class RenameReference < ActiveRecord::Migration
  def change
    rename_column :stars, :data_coins_id, :data_coin_id
  end
end
