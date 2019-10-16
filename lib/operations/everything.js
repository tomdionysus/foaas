module.exports =
  name: "Everything"
  url: '/everything/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/everything/:from', (req, res) ->
      message = "Fuck everything."
      subtitle = "- #{req.params. from}"
      output(req, res, message, subtitle)