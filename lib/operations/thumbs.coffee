module.exports =
  name: 'This Guy'
  url: '/thumbs/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/thumbs/:from', (req, res) ->
      message = "Who has two thumbs and doesn't give a fuck? #{req.params. from}."
      subtitle = "- #{req.params. from}"
      output(req, res, message, subtitle)