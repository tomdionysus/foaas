module.exports =
  name: "Cocksplat"
  url: '/cocksplat/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/cocksplat/:name/:from', (req, res) ->
      message = "Fuck off #{req.params.name}, you worthless cocksplat"
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)