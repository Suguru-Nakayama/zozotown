Rails.application.routes.draw do
  root "tests#delivery"
  # root "tops#all"
  devise_for :users, controllers: {
    registrations: 'users/registrations',
  }
  get 'carts/index' => 'carts#index'

  get 'carts/register' => 'carts#register'

  get 'carts/create' => 'carts#create'

  delete 'carts/destroy' => 'carts#destroy'

    get 'order/index' => 'orders#index' #←ネストする

  get "men_top"    => "tops#men"
  get "women_top"  => "tops#women"
  get "kid_top"    => "tops#kid"
  get "tests/search" => "tests#search"

  resources :men_shops, only: [:index, :show]
  resources :women_shops, only: [:index, :show]
  resources :kid_shops, only: [:index, :show]
  resources :shops, only: [:index, :show] do
    resources :items, only: [:index, :show]
  end
  resources :brands, only: [:index, :show]
  resources :top_categories, only: [:show]
  resources :sub_categories, only: [:show]
end
