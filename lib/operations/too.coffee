module.exports =
  name: "Too"
  url: '/too/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/too/:from', (req, res) ->
      message = "Thanks, fuck you too."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
