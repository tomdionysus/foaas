module.exports =
  name: "Family"
  url: '/family/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/family/:from', (req, res) ->
      message = "Fuck you, your whole family, your pets, and your feces."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)