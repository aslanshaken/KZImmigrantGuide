class AuthenticationController < ApplicationController
    before_action :authorize_request, except: :login

    # POST /auth/login
    def login
      @user = User.find_by(username: login_params[:username])
      if @user.authenticate(login_params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
        token = encode({id: @user.id})
        render json: {
          user: @user.attributes.except("password_digest"),
          token: token,
          }, status: :ok
      else
        render json: { errors: 'unauthorized' }, status: :unauthorized
      end
    end
    
    # GET /auth/verify
    def verify
      render :json => { 
        :user =>  @current_user.attributes.except("password_digest"),
        :image => if @current_user.avatar.present?
        {
          filename:  @current_user.avatar.filename,
          content_type:   @current_user.avatar.content_type,
          created_at:   @current_user.avatar.created_at,
          url: url_for(@current_user.avatar)
        }
        end
      }, status: :ok
    end
  
    private
  
    def login_params
      params.require(:authentication).permit(:username, :password)
    end
end
