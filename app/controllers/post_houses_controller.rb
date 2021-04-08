class PostHousesController < ApplicationController
  before_action :set_post_house, only: [:show]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # CREATE
  # p.photo.attach(io: File.open("/home/lee/Desktop/weekly.png"), filename: "weekly.png")
  

  # GET /post_houses
  def index
    @post_houses = PostHouse.all

    posts = @post_houses.map do |post_house|{ 
      :post_house => post_house,
      :images => post_house.photos.map{ |photo| ({
        filename: photo.filename,
        content_type: photo.content_type,
        created_at: photo.created_at,
        url: url_for(photo)
      })}
    } 
    end

    render json: posts

  end

  # GET /post_houses/1
  def show
      render :json => { 
        :post_house => @post_house, 
        :images => @post_house.photos.map{ |photo| ({
          filename: photo.filename,
          content_type: photo.content_type,
          created_at: photo.created_at,
          url: url_for(photo) 
        })} 
      } 
  end

  # POST /post_houses
  def create
    @post_house = PostHouse.new(post_house_params) # Attach new object to post_house
    @post_house.user = @current_user # Attach current user to post_house
    if @post_house.save # if it's works then continue 

      # params[:images].each do |img|
      #   @post_house.photos.attach(:image => img)
      # end

        render json: @post_house, status: :created, location: @post_house # respond as line 29-39
    else
      render json: @post_house.errors, status: :unprocessable_entity
    end
  end


  # def create
  #   # all = Array.new
  #   params[:images].each do |img|
  #   PostHouse.first.photos.attach(img)
  #   end
  #   render json: PostHouse.first.photos.attached?
  # end


  # PATCH/PUT /post_houses/1
  def update
    @post_house = @current_user.post_houses.find(params[:id])  
    if @post_house.update(post_house_params)
  
      # @post_house.photos.each(&:destroy)  if @post_house.photos.present? 
      # params[:images].each do |img|
      #   @post_house.photos.attach(:image => img.last)
      # end

      render json: @post_house # respond as line 29-39
    else
      render json: @post_house.errors, status: :unprocessable_entity
    end
  end

  # DELETE /post_houses/1
  def destroy
    @post_house = @current_user.post_houses.find(params[:id]) 

    # @post_house.photos.each(&:destroy)  if @post_house.photos.present? 

    @post_house.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post_house
      @post_house = PostHouse.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_house_params
      params.require(:post_house).permit(:name, :description, :city, :date_move_in, :price, :cellphone, :email, :user_id, :state, :bathroom)
      # params.require(:images)
    end 
    
end
