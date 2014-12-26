module.exports =
  name: "Bus"
  url: '/bus/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/bus/:name/:from', (req, res) ->
      message = "Christ on a bendy-bus, #{req.params.name}, don't be such a fucking faff-arse."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)