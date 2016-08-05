module.exports =
  name: "Fuck This Shit"
  url: '/shit/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/shit/:from', (req, res) ->
      message = "Fuck this shit!"
      subtitle = "- #{req.params. from}"
      output(req, res, message, subtitle)