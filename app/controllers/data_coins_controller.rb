class DataCoinsController < ApplicationController
  before_action :set_data_coin, only: [:show, :edit, :update, :destroy]

  # GET /data_coins
  # GET /data_coins.json
  def index
    @data_coins_first = DataCoin.all.limit(4)
    @data_coins_rest = DataCoin.all.offset(4)
  end

  # GET /data_coins/1
  # GET /data_coins/1.json
  def show
  end

  # GET /data_coins/new
  def new
    @data_coin = DataCoin.new
  end

  # GET /data_coins/1/edit
  def edit
  end

  # POST /data_coins
  # POST /data_coins.json
  def create
    @data_coin = DataCoin.new(data_coin_params)

    respond_to do |format|
      if @data_coin.save
        format.html { redirect_to @data_coin, notice: 'Data coin was successfully created.' }
        format.json { render :show, status: :created, location: @data_coin }
      else
        format.html { render :new }
        format.json { render json: @data_coin.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /data_coins/1
  # PATCH/PUT /data_coins/1.json
  def update
    respond_to do |format|
      if @data_coin.update(data_coin_params)
        format.html { redirect_to @data_coin, notice: 'Data coin was successfully updated.' }
        format.json { render :show, status: :ok, location: @data_coin }
      else
        format.html { render :edit }
        format.json { render json: @data_coin.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /data_coins/1
  # DELETE /data_coins/1.json
  def destroy
    @data_coin.destroy
    respond_to do |format|
      format.html { redirect_to data_coins_url, notice: 'Data coin was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_data_coin
      @data_coin = DataCoin.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def data_coin_params
      params.require(:data_coin).permit(:name)
    end
end
