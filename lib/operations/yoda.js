module.exports =
  name: "Yoda"
  url: '/yoda/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/yoda/:name/:from', (req, res) ->
      message = "Fuck off, you must, #{req.params.name}."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)