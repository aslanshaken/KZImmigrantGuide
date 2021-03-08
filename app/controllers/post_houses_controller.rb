class PostHousesController < ApplicationController
  before_action :set_post_house, only: [:show, :update, :destroy]

  # GET /post_houses
  def index
    @post_houses = PostHouse.all

    render json: @post_houses
  end

  # GET /post_houses/1
  def show
    render json: @post_house
  end

  # POST /post_houses
  def create
    @post_house = PostHouse.new(post_house_params)

    if @post_house.save
      render json: @post_house, status: :created, location: @post_house
    else
      render json: @post_house.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /post_houses/1
  def update
    if @post_house.update(post_house_params)
      render json: @post_house
    else
      render json: @post_house.errors, status: :unprocessable_entity
    end
  end

  # DELETE /post_houses/1
  def destroy
    @post_house.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post_house
      @post_house = PostHouse.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_house_params
      params.require(:post_house).permit(:name, :description, :city, :date_move_in, :price, :cellphone, :email, :user_id)
    end
end
