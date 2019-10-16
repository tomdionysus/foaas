module.exports =
  name: "Flying"
  url: '/flying/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/flying/:from', (req, res) ->
      message = "I don't give a flying fuck."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)