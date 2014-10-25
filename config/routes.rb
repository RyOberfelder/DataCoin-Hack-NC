Rails.application.routes.draw do
  resources :users

  resources :data_coins

  root 'static_pages#index'
  get 'about' => 'static_pages#about'
end
