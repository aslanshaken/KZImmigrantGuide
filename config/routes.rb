Rails.application.routes.draw do
  resources :post_houses
  resources :post_by_employees
  resources :get_employees
  resources :users, only: :create  #This goes to controller and creates a new user in our Database
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
