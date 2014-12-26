module.exports =
  name: "King"
  url: '/king/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/king/:name/:from', (req, res) ->
      message = "Oh fuck off, just really fuck off you total dickface. Christ #{req.params.name}, you are fucking thick."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)