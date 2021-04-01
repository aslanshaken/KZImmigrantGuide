Rails.application.routes.draw do
  resources :blogs
  resources :communities
  resources :post_house_wanteds
  resources :post_houses
  resources :post_by_employees
  resources :get_employees
  resources :users # only: :create  #This goes to controller and creates a new user in our Database
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  post 'password/forgot', to: 'passwords#forgot'
  post 'password/reset', to: 'passwords#reset'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
