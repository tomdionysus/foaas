module.exports =
  name: "Fascinating"
  url: '/fascinating/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/fascinating/:from', (req, res) ->
      message = "Fascinating story, in what chapter do you shut the fuck up?"
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)