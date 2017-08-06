module.exports =
  name: "Immensity"
  url: '/immensity/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/immensity/:from', (req, res) ->
      message = "You can not imagine the immensity of the FUCK I do not give."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
