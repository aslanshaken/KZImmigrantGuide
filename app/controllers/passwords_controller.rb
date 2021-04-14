class PasswordsController < ApplicationController

    def forgot
        user = User.find_by(email: params[:email])
        if user
          user.send_password_reset
          render json: {alert: true}
        else
          #this sends regardless of whether there's an email in database for security reasons
          render json:  {alert: false}
        end
      end
    
      def reset
        user = User.find_by(password_reset_token: reset_params[:token], email: reset_params[:email])
        if user.present? && user.password_token_valid?
          if user.reset_password( reset_params[:password])
            session[:user_id] = user.id # ??? 
            render json: {
              alert: true
            }
          else
            render json: {alert: false }
          end
        else
          render json: {alert: 'not found'}
        end
      end

      def reset_params
        params.require(:data).permit(:token, :email, :password)
      end

      # def forgot_params
      #   params.require(:emailInfo).permit(:email)
      # end

end
