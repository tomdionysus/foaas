module.exports =
  name: "Life"
  url: '/life/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/life/:from', (req, res) ->
      message = "Fuck my life."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)