module.exports =
  name: "Pulp"
  url: '/pulp/:language/:from'
  fields: [
    { name: 'Language', field: 'language'},
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/pulp/:language/:from', (req, res) ->
      message = "#{req.params.language}, motherfucker, do you speak it?"
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)

