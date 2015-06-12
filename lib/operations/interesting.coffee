module.exports =
  name: "Interesting"
  url: '/interesting/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/interesting/:name/:from', (req, res) ->
      message = "That's so interesting, #{req.params.name}. Tell me more, after you fuck yourself."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
