module.exports =
  name: "Because"
  url: '/because/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/because/:from', (req, res) ->
      message = "Why? Because Fuck you, that's why."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)