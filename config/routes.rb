Rails.application.routes.draw do
  get 'main/index'
  get 'features'=> 'main#features'
  get 'success_stories'=> 'main#success_stories'
  get 'pricing'=> 'main#pricing'
  get 'app'=> 'main#app'
  get '/credit_card'=> 'main#credit_card'
  root 'main#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
