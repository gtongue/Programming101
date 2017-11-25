Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy], controller: :session
    resources :users, only: [:create]
    resources :challenges, only: [:index, :show]
  end
  root to: 'root#root'
end
