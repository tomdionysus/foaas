module.exports =
  name: "Tucker"
  url: '/tucker/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/tucker/:from', (req, res) ->
      message = "Come the fuck in or fuck the fuck off."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
