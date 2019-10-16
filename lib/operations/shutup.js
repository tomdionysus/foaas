module.exports =
  name: "Shut Up"
  url: '/shutup/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/shutup/:name/:from', (req, res) ->
      message = "#{req.params.name}, shut the fuck up."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
