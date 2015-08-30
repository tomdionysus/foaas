module.exports =
  name: "Retard"
  url: '/retard/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/retard/:from', (req, res) ->
      message = "You Fucktard!"
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
