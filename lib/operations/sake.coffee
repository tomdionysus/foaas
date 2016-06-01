module.exports =
  name: "sake"
  url: '/sake/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/sake/:from', (req, res) ->
      message = "For Fuck's sake!"
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
