module.exports =
  name: "Shakespeare"
  url: '/shakespeare/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/shakespeare/:name/:from', (req, res) ->
      message = "#{req.params.name}, Thou clay-brained guts, thou knotty-pated fool, thou whoreson obscene greasy tallow-catch!"
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)