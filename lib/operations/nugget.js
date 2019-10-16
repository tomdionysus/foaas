module.exports =
  name: "Nugget"
  url: '/nugget/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/nugget/:name/:from', (req, res) ->
      message  = "Well #{req.params.name}, aren't you a shining example of a rancid fuck-nugget."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)