module.exports =
  name: "You Think"
  url: '/think/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/think/:name/:from', (req, res) ->
      message = "#{req.params.name}, you think I give a fuck?"
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
