Rails.application.routes.draw do
  root to: 'pages#home'
  get 'get_dataset', to: 'pages#get_dataset'
  get 'get_processed_dataset', to: 'pages#get_processed_dataset'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
