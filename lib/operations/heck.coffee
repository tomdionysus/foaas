module.exports =
  name: "heck"
  url: '/heck/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/heck/:name/:from', (req, res) ->
      message = "Heck off, #{req.params.name}!"
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
