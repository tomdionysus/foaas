module.exports =
  name: "Bravo Mike"
  url: '/bm/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/bm/:name/:from', (req, res) ->
      message = "Bravo mike, #{req.params.name}."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)