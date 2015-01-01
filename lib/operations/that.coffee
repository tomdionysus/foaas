module.exports =
  name: "Fuck That"
  url: '/that/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/that/:from', (req, res) ->
      message = "Fuck that."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)