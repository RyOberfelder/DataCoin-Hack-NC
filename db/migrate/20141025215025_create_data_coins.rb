class CreateDataCoins < ActiveRecord::Migration
  def change
    create_table :data_coins do |t|
      t.string :name

      t.timestamps
    end
  end
end
