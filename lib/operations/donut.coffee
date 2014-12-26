module.exports =
  name: "Donut"
  url: '/donut/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/donut/:name/:from', (req, res) ->
      message = "#{req.params.name}, go and take a flying fuck at a rolling donut."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)