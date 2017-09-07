Rails.application.routes.draw do
  devise_for :admins
  resources :admins
  devise_for :users, path: 'auth', path_names: { sign_in: 'login', sign_out: 'logout', registration: 'register' }
  resources :users
  
  devise_scope :user do
    get 'auth/sign_in', to: 'devise/sessions#new'
  end

  #** Seguro esta linea creará conflicto, borren esta linea para asignar la verdadera landing page 
  root 'users#index' # REEMPLAZAR POR RUTA DE LANDING PAGE
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
