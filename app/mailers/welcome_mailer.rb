class WelcomeMailer < ApplicationMailer
    def welcome_mailer( user )
        @user = user
        @url = 'https://safeandsound.herokuapp.com/'
        mail(to: user.email, subject: 'Bienvenido a Safe and Sound!')
    end    
end
