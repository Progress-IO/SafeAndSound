Rails.application.routes.draw do
    resources :reports
    # get 'user_panel/index'
    get '/users_panel' =>'user_panel#index', :as => :user_panel
    get '/users_panel/report' =>'user_panel#report', :as => :report_type

    resources :discussions
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

    get "landing_page/contact", as: "contact"

    get "auth/login" => "users/sessions#new", as: "login"
    get "auth/registration" => "user/registrations#new", as: "register"
    get 'reports/index'


    # User_panel redirect
    get "/user_panel" => 'user_panel#index', as: :user_root

    namespace :user do
    root "user_panel#index"
    end

    root 'landing_page#index'
end
