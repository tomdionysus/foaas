module.exports =
  name: "Bday"
  url: '/bday/:name/:from'
  excludeFromRandom: true
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/bday/:name/:from', (req, res) ->
      message = "Happy Fucking Birthday, #{req.params.name}."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
