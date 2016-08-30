module.exports =
  name: "Trump tax"
  url: '/trump/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/trump/:from', (req, res) ->
      message = "Listen you motherfuckers, I'm gonna tax you 25%."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
