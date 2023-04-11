Rails.application.routes.draw do
  
  # resources :notes
  # resources :recommendations
  # resources :categories
  resources :users, only: [:index, :show]

  get "/me", to: "users#show"

  post "/signup", to: "users#create"
  # get '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
  # get '/me', to: 'users#get_current_user'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
