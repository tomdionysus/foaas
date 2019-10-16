module.exports =
  name: "Fucking"
  url: '/ing/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/ing/:name/:from', (req, res) ->
      message = "Fucking fuck off, #{req.params.name}."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
