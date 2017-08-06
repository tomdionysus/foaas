module.exports =
  name: "FYYFF"
  url: '/fyyff/:from'
  fields: [
    { name: 'From', field: 'from' }
  ]

  register: (app, output) ->
    app.get '/fyyff/:from', (req, res) ->
      message = "Fuck you, you fucking fuck."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)