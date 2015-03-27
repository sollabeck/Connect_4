require 'json'

get '/' do
  erb :login
end

post '/signin' do
  @name1 = params[:player1name].to_json
  email1 = params[:player1]
  @name2 = params[:player2name].to_json
  email2 = params[:player2]
  @player1_img = signin(email1).to_json
  @player2_img = signin(email2).to_json
  erb :connect4
end

