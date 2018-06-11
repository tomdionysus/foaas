module.exports =
  name: "Fuck That Shit"
  url: '/fts/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/fts/:name/:from', (req, res) ->
      message = "Fuck that shit, #{req.params.name}."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
