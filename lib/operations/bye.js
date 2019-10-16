module.exports =
  name: "Bye"
  url: '/bye/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/bye/:from', (req, res) ->
      message = "Fuckity bye!"
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)