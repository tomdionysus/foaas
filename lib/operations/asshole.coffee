module.exports = 
  name: "Asshole"
  url: '/asshole/:from'
  fields: [
      { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/asshole/:from', (req, res) ->
      message = "Fuck you, asshole."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)