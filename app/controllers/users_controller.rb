class UsersController < ApplicationController
  before_action :set_user, only: [:show]
  before_action :authorize_request, only: [:update, :destroy]

  # # GET /users
  def index
    @users = User.all

    users = @users.map do |user| { 
      :user => user,
      :image => {
        filename: user.avatar.filename,
        content_type: user.avatar.content_type,
        created_at: user.avatar.created_at,
        url: url_for(user.avatar)
      }
    }
    end

    render json: users

  end

  # # GET /users/1
  def show
    render :json => { 
      :user => @user,
      :image => {
        filename: @user.avatar.filename,
        content_type:  @user.avatar.content_type,
        created_at:  @user.avatar.created_at,
        url: url_for(@user.avatar)
      }
    } 
  end

  def create
    @user = User.new(user_params)
    
    if @user.save

      # UserMailer.password_reset(@user).deliver_now  - Action Mailer | Sends Token
      @user.avatar.attach(params[:image]) # Active Storage

      @token = encode({id: @user.id})
      render json: {
        user: @user.attributes.except("password_digest"),
        token: @token
        }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end


  # # PATCH/PUT /users/1
  def update
      @user = @current_user.users.find(params[:id])  # Checks if user is exist
    if @user.update(user_params) # How does it know that it needs to go to the Schema?

      @user.avatar.destroy  if @user.avatar.present?  # Active Storage
      @user.avatar.attach(params[:image]) # Active Storage

      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # # DELETE /users/1
  def destroy
    @user = @current_user.users.find(params[:id])  # Checks if user is exist
    
    @user.avatar.destroy  if @user.avatar.present?  # Active Storage

    @user.destroy # How does it know that it needs to go to the Schema?
  end

  private
  #   # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through. GATE Requirements
    def user_params
      params.require(:user).permit(:username, :email, :password, :password_reset_token, :password_reset_sent_at, :first_name, :last_name, :dob, :cellphone, :gender, :birth_place, :about_me, :facebook, :instagram, :current_city)
    end
end
