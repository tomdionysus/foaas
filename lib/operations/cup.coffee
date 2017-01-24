module.exports =
  name: "Cup"
  url: '/cup/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/cup/:from', (req, res) ->
      message = "How about a nice cup of shut the fuck up?"
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
