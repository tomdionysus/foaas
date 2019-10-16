module.exports =
  name: "mornin"
  url: '/mornin/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/mornin/:from', (req, res) ->
      message = "Happy fuckin' mornin'!"
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
