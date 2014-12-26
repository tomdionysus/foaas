module.exports =
  name: "Version"
  url: '/version'
  fields: []

  register: (app, output, version) ->
    app.get '/version', (req, res) ->
      message = "Version #{version}"
      subtitle = "FOAAS"
      output(req, res, message, subtitle)