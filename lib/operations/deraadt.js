module.exports =
  name: "{name} you are being the usual slimy hypocritical asshole... You may have had value ten years ago, but people will see that you don't anymore."
  url: '/deraadt/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/deraadt/:name/:from', (req, res) ->
      message = "#{req.params.name} you are being the usual slimy hypocritical asshole... You may have had value ten years ago, but people will see that you don't anymore."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
