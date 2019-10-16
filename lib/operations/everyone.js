module.exports =
  name: "Everyone"
  url: '/everyone/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/everyone/:from', (req, res) ->
      message = "Everyone can go and fuck off."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)