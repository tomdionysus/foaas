module.exports =
  name: "Zero"
  url: '/zero/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/zero/:from', (req, res) ->
      message = "Nope. Zero fucks given."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
