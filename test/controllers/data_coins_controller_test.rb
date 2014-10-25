require 'test_helper'

class DataCoinsControllerTest < ActionController::TestCase
  setup do
    @data_coin = data_coins(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:data_coins)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create data_coin" do
    assert_difference('DataCoin.count') do
      post :create, data_coin: { name: @data_coin.name }
    end

    assert_redirected_to data_coin_path(assigns(:data_coin))
  end

  test "should show data_coin" do
    get :show, id: @data_coin
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @data_coin
    assert_response :success
  end

  test "should update data_coin" do
    patch :update, id: @data_coin, data_coin: { name: @data_coin.name }
    assert_redirected_to data_coin_path(assigns(:data_coin))
  end

  test "should destroy data_coin" do
    assert_difference('DataCoin.count', -1) do
      delete :destroy, id: @data_coin
    end

    assert_redirected_to data_coins_path
  end
end
