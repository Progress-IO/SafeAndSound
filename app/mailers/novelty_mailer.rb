class NoveltyMailer < ApplicationMailer
    layout "mailer"

    def novelty_mailer(email, username)
        @t_email = email
        @t_username = username
        @url = 'https://safeandsound.herokuapp.com/security_news/'
        mail(to: email, subject: '¡Tu ciudad es mas segura ahora!')
    end

end
