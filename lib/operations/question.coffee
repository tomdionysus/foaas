module.exports =
  name: "Question"
  url: '/question/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/question:from', (req, res) ->
      message = "To fuck off, or to fuck off (that is not a question)"
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
