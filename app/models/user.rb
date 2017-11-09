class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, :omniauth_providers => [:facebook],
         :authentication_keys =>{email: false, login: true}

  has_many :discussions
  has_many :routes
  has_many :reports
  has_many :suspects

  cattr_accessor :current_user

  def login=(login)
    @login = login
  end

  def login
    @login || self.username || self.email
  end

  validates :username,
            :presence => true,
            :uniqueness => {
                :case_sensitive => false
            } # etc.

# Only allow letter, number, underscore and punctuation.
validates_format_of :username, with: /^[a-zA-Z0-9_\.]*$/, :multiline => true

  def is_police
    return self.Ispolice
  end

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
     user.email = auth.info.email
     user.password = Devise.friendly_token[0,20]
     user.name = auth.info.name   # assuming the user model has a name
     #user.image = auth.info.image # assuming the user model has an image
     # If you are using confirmable and the provider(s) you use validate emails,
     # uncomment the line below to skip the confirmation emails.
     # user.skip_confirmation!
    end
  end

  def self.regular_users
      return User.where(Isadmin: [nil, "false"], Ispolice: [nil, "false"])
  end

  def self.cops_users
      return User.where.not( Ispolice: [nil, "false"])
  end

  def self.admin_users
      return User.where.not( Isadmin: [nil, "false"])
  end



  after_create :send_welcome

  def send_welcome
    WelcomeMailer.welcome_mailer(self).deliver_now
  end

  def self.find_for_database_authentication(warden_conditions)
      conditions = warden_conditions.dup
      if login = conditions.delete(:login)
         where(conditions).where(["username = :value OR lower(email) = lower(:value)", { :value => login }]).first

      elsif conditions.has_key?(:username) || conditions.has_key?(:email)
        where(conditions.to_hash).first
      end
  end
  mount_uploader :avatar, ImageUploader
  serialize :avatar, JSON # If you use SQLite, add this line.
end
