module.exports =
  name: "That's fucking ridiculous"
  url: '/ridiculous/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/ridiculous/:from', (req, res) ->
      message = "That's fucking ridiculous"
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
