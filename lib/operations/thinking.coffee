module.exports =
  name: "Thinking"
  url: '/thinking/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/thinking/:name/:from', (req, res) ->
      message  = "#{req.params.name}, what the fuck were you actually thinking?"
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
