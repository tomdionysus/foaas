module.exports =
  name: "Fuck You"
  url: '/you/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/you/:name/:from', (req, res) ->
      message = "Fuck you, #{req.params.name}."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)