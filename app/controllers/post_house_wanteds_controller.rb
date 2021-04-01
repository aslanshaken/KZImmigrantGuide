class PostHouseWantedsController < ApplicationController
  before_action :set_post_house_wanted, only: [:show]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /post_house_wanteds
  def index
    @post_house_wanteds = PostHouseWanted.all

    render json: @post_house_wanteds
  end

  # GET /post_house_wanteds/1
  def show
    render json: @post_house_wanted
  end

  # POST /post_house_wanteds
  def create
    @post_house_wanted = PostHouseWanted.new(post_house_wanted_params)
    @post_house_wanted.user = @current_user
    if @post_house_wanted.save
      render json: @post_house_wanted, status: :created, location: @post_house_wanted
    else
      render json: @post_house_wanted.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /post_house_wanteds/1
  def update
    @post_house_wanted = @current_user.post_house_wanteds.find(params[:id])
    if @post_house_wanted.update(post_house_wanted_params)
      render json: @post_house_wanted
    else
      render json: @post_house_wanted.errors, status: :unprocessable_entity
    end
  end

  # DELETE /post_house_wanteds/1
  def destroy
    @post_house_wanted = @current_user.post_house_wanteds.find(params[:id])
    @post_house_wanted.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post_house_wanted
      @post_house_wanted = PostHouseWanted.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_house_wanted_params
      params.require(:post_house_wanted).permit(:name, :about_me, :state, :city, :date_move_in, :bathroom, :cellphone, :email, :user_id)
    end
end
