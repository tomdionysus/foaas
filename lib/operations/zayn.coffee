module.exports =
  name: "Zayn"
  url: '/zayn/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/zayn/:from', (req, res) ->
      message = "Ask me if I give a motherfuck ?!!"
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
