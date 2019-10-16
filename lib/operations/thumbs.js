module.exports =
  name: 'This Guy'
  url: '/thumbs/:name/:from'
  fields: [
    { name: 'From', field: 'from'},
    { name: 'Name', field: 'name'}
  ]

  register: (app, output) ->
    app.get '/thumbs/:name/:from', (req, res) ->
      message = "Who has two thumbs and doesn't give a fuck? #{req.params. name}."
      subtitle = "- #{req.params. from}"
      output(req, res, message, subtitle)