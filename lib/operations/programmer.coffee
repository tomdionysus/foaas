module.exports =
  name: "Programmer"
  url: '/programmer/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/programmer/:from', (req, res) ->
      message = "Fuck you, I'm a programmer, bitch!"
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
