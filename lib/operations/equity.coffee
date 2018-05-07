module.exports =
  name: "Equity"
  url: '/equity/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/equity/:name/:from', (req, res) ->
      message = "Equity only? Long hours? Well #{req.params.name}, just sign me right to fuck up."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)