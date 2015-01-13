module.exports =
  name: "Awesome"
  url: '/awesome/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/awesome/:from', (req, res) ->
      message = "This is Fucking Awesome."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
