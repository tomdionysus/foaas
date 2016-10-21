module.exports =
  name: "RTFM"
  url: '/rtfm/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/rtfm/:from', (req, res) ->
      message = "Read the fucking manual!"
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
