Rails.application.routes.draw do
  resources :comments

  resources :stars

  resources :users

  resources :data_coins

  root 'static_pages#index'
  get 'about' => 'static_pages#about'
  get 'welcome' => 'static_pages#welcome'
end
