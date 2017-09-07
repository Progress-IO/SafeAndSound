Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'landing_page/contact'
  get "contact" => "landing_page#contact", as: "contact"
  root 'landing_page#index'
end
