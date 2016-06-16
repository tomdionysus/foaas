module.exports =
  name: "Maybe"
  url: '/maybe/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/maybe/:from', (req, res) ->
      message = "Maybe. Maybe not. Maybe fuck yourself."
      subtitle = "- #{req.params. from}"
      output(req, res, message, subtitle)