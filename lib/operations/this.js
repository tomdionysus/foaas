module.exports =
  name: "Fuck This"
  url: '/this/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/this/:from', (req, res) ->
      message = "Fuck this."
      subtitle = "- #{req.params. from}"
      output(req, res, message, subtitle)