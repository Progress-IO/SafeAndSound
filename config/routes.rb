Rails.application.routes.draw do
    # devise_for :admins
    # resources :admins
    # resources :users

    # get 'user_panel/index'
    devise_for :users,:controllers => {:omniauth_callbacks => "users/omniauth_callbacks"},  path: 'auth', path_names: { sign_in: 'login', sign_out: 'logout', registration: 'register' }
    get '/users_panel/report' =>'user_panel#report', :as => :report_type
    get "landing_page/contact", as: "contact"
    get 'reports' => 'reports#index', :as => :reports_list;
    root 'landing_page#index'

    authenticate :user do
        resources :routes
        resources :suspects
        resources :reports
        resources :discussions
        get '/users_panel' =>'user_panel#index', :as => :user_panel
        get 'reports/index'
        get "/user_panel" => 'user_panel#index', as: :user_root
        get '/users_panel/statistics' =>'user_panel#statistics', :as => :statistics
    end

    namespace :user do
        root "user_panel#index"
    end

    devise_scope :user do
        get 'auth/sign_in', to: 'devise/sessions#new'
        get 'auth/registration', to: 'devise/registrations#new'
        get 'auth/sign_out', to: 'devise/sessions#destroy'
    end

    get "auth/login" => "users/sessions#new", as: "login"
    get "auth/registration" => "user/registrations#new", as: "register"

end
