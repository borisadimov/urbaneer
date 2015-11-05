exports.config =
  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^(?!app)/

    stylesheets:
      joinTo: 'stylesheets/app.css'

    templates:
      joinTo: 'javascripts/app.js'

  plugins:
    jaded:
      jade:
        pretty: yes

    postcss:
      processors: [
          require('autoprefixer')(['> 1%','last 8 versions']),
          require('postcss-flexbugs-fixes')
      ]