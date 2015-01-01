module.exports =
  name: "Cool Story"
  url: '/cool/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/cool/:from', (req, res) ->
      message = "Cool story, bro."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)