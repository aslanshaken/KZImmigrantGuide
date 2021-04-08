class CommunitiesController < ApplicationController
  before_action :set_community, only: [:show]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /communities
  def index
    @communities = Community.all

    posts = @communities.map do |community| { 
      :community => community,
      :image => {
        filename: community.photo.filename,
        content_type: community.photo.content_type,
        created_at: community.photo.created_at,
        url: url_for(community.photo)
      }
    }
    end

    render json: posts
  end

  # GET /communities/1
  def show
    render :json => { 
      :community => @community,
      :image => {
        filename: @community.photo.filename,
        content_type: @community.photo.content_type,
        created_at: @community.photo.created_at,
        url: url_for(@community.photo)
      }
    } 
  end

  # POST /communities
  def create
    @community = Community.new(community_params)
    @community.user = @current_user
    if @community.save

      @community.photo.attach(params[:image]) # Active Storage

      render json: @community, status: :created, location: @community
    else
      render json: @community.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /communities/1
  def update
    @community = @current_user.communities.find(params[:id])
    if @community.update(community_params)

      @community.photo.destroy  if @community.photo.present?  # Active Storage
      @community.photo.attach(params[:image]) # Active Storage

      render json: @community
    else
      render json: @community.errors, status: :unprocessable_entity
    end
  end

  # DELETE /communities/1
  def destroy
    @community = @current_user.communities.find(params[:id])

    @community.photo.destroy  if @community.photo.present?  # Active Storage

    @community.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_community
      @community = Community.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def community_params
      params.require(:community).permit(:name_community, :state, :city, :members_count, :contact_name, :contact_email, :contact_phone, :facebook, :telegram, :whatsapp, :user_id)
    end
end
