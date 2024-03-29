Rails.application.routes.draw do
  
  resources :users
  resources :logs
  resources :exercises
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  #get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
 
  # Session Routes
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/my-bycep-exercises', to: 'exercises#my-bycep-exercises'


end
