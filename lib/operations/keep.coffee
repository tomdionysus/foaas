module.exports =
  name: "Keep"
  url: '/keep/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/keep/:name/:from', (req, res) ->
      message = "#{req.params.name}: Fuck off. And when you get there, fuck off from there too. Then fuck off some more. Keep fucking off until you get back here. Then fuck off again."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)