require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module SafeAndSound
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    # Rails.application.config.assets.precompile += ['myTemplate.js', 'myTemplate.css']
    config.load_defaults 5.1
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.


    # Removidos tags agregados por Devise al existir un error.
    config.action_view.field_error_proc = Proc.new { |html_tag, instance| html_tag.html_safe }

    # Agregar fuente UBUNTU
    config.assets.paths << Rails.root.join("app", "assets", "fonts")

    config.assets.precompile = %w(*.js *.coffee *.scss *.png *.jpg *.jpeg *.gif *.ico *.eot *.svg *.ttf *.woff)
  end
end
