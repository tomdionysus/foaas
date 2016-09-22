module.exports =
  name: "Whoop"
  url: '/whoop/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/whoop/:from', (req, res) ->

      message = "Whoop dee fucking doo!"
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
