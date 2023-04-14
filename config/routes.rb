Rails.application.routes.draw do
  
  resources :notes, only: [:index, :create ]
  resources :recommendations
  resources :categories, only: [:index, :create, :show]

  # `` resources :users, only: [:index, :show, :create]
  # `` resources :users
  # `` get '/signup', to: 'users#create'
  # `` get '/me', to: 'users#get_current_user'
  # `` get "/me", to: "users#show"

  # get '/users' , to: 'users#index'
  # get '/current-user', to: 'users#get_current_user'
  # get '/users', to: 'users#index'
  # get '/categories', to: 'categories#index'
  # post '/categories', to: 'categories#create'
  

  resources :users, only: [:show, :create, :index]
  post '/login', to: 'sessions#create' 
  delete '/logout', to: 'sessions#destroy' 
  post "/signup", to: "users#create" 
  get '/me', to: 'users#show' 
  get '/all', to: 'categories#all'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
end
