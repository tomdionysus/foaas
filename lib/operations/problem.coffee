module.exports =
  name: "Problem"
  url: '/problem/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/problem/:name/:from', (req, res) ->
      message = "What the fuck is your problem #{req.params.name}?"
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
