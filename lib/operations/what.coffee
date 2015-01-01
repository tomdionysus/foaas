module.exports =
  name: "What"
  url: '/what/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/what/:from', (req, res) ->
      message = "What the fuck‽"
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)