Rails.application.routes.draw do
  get 'user_panel/index'

  devise_for :admins
  resources :admins
  devise_for :users,:controllers => {:omniauth_callbacks => "users/omniauth_callbacks"},  path: 'auth', path_names: { sign_in: 'login', sign_out: 'logout', registration: 'register' }

  resources :users

  devise_scope :user do
    get 'auth/sign_in', to: 'devise/sessions#new'
    get 'auth/registration', to: 'devise/registrations#new'
    get 'auth/sign_out', to: 'devise/sessions#destroy'
  end

  #** Seguro esta linea creará conflicto, borren esta linea para asignar la verdadera landing page

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'landing_page/contact'
  # get 'panel', to: 'user_panel/index'

  get "contact" => "landing_page#contact", as: "contact"

  get "auth/login" => "users/sessions#new", as: "login"
  get "auth/registration" => "user/registrations#new", as: "register"
  root 'landing_page#index'
end
