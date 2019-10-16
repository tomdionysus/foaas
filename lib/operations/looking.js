module.exports =
  name: "Looking"
  url: '/looking/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/looking/:from', (req, res) ->
      message = "Looking for a fuck to give."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)