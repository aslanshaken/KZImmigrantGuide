class PostHouseWantedsController < ApplicationController
  before_action :set_post_house_wanted, only: [:show]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /post_house_wanteds
  def index
    @post_house_wanteds = PostHouseWanted.all

    posts = @post_house_wanteds.map do |post_house_wanted| { 
      :post_house_wanted => post_house_wanted,
      :image => {
        filename: post_house_wanted.avatar2.filename,
        content_type: post_house_wanted.avatar2.content_type,
        created_at: post_house_wanted.avatar2.created_at,
        url: url_for(post_house_wanted.avatar2)
      }
    }
    end
    #   post_house_wanted.avatar2.map{ |avatar| ({
    #     filename: avatar.filename,
    #     content_type: avatar.content_type,
    #     created_at: avatar.created_at,
    #     url: url_for(avatar) 
    #   })}
    # } 
    render json: posts
  end

  # GET /post_house_wanteds/1
  def show
    render :json => { 
      :post_house_wanted => @post_house_wanted, 
      :image => {
        filename: @post_house_wanted.avatar2.filename,
        content_type: @post_house_wanted.avatar2.content_type,
        created_at: @post_house_wanted.avatar2.created_at,
        url: url_for(@post_house_wanted.avatar2)
      }
    } 
  end

  # POST /post_house_wanteds
  def create
    @post_house_wanted = PostHouseWanted.new(post_house_wanted_params)
    @post_house_wanted.user = @current_user
    if @post_house_wanted.save

      @post_house_wanted.avatar2.attach(params[:image]) # Active Storage

      render json: @post_house_wanted, status: :created, location: @post_house_wanted # respond as line 30-40
    else
      render json: @post_house_wanted.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /post_house_wanteds/1
  def update
    @post_house_wanted = @current_user.post_house_wanteds.find(params[:id])
    if @post_house_wanted.update(post_house_wanted_params)
      
      @post_house_wanted.avatar2.destroy if  @post_house_wanted.avatar2.present?  # Active Storage
      @post_house_wanted.avatar2.attach(params[:image]) # Active Storage

      render json: @post_house_wanted # respond as line 30-40
    else
      render json: @post_house_wanted.errors, status: :unprocessable_entity
    end
  end

  # DELETE /post_house_wanteds/1
  def destroy
    @post_house_wanted = @current_user.post_house_wanteds.find(params[:id])

    @post_house_wanted.avatar2.destroy if  @post_house_wanted.avatar2.present? # Active Storage

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
