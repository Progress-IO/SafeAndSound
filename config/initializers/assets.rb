# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )
Rails.application.config.assets.precompile += %w( style.css )
Rails.application.config.assets.precompile += %w( materialize.css )
Rails.application.config.assets.precompile += %w( init.js )
Rails.application.config.assets.precompile += %w( materialize_init.js )

# Google maps utilities
Rails.application.config.assets.precompile += %w( g_maps/gm_user-panel.js )
Rails.application.config.assets.precompile += %w( g_maps/gm_report-new.js )
Rails.application.config.assets.precompile += %w( g_maps/gm_suspect-new.js )
Rails.application.config.assets.precompile += %w( g_maps/gm_transport-new.js )
Rails.application.config.assets.precompile += %w( g_maps/gm_route.js )
Rails.application.config.assets.precompile += %w( g_maps/gm_route-show.js )
Rails.application.config.assets.precompile += %w( g_maps/gm_novelty-new.js )
Rails.application.config.assets.precompile += %w( pdf/tables.css )

# Fuentes
# Rails.application.config.assets.precompile << /\.(?:svg|eot|woff|ttf)\z/
