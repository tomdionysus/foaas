module.exports =
  name: "Fuck Me"
  url: '/me/:from'
  fields: [{ name: 'From', field: 'from'}]

  register: (app, output) ->
    app.get '/me/:from', (req, res) ->
      message = "Fuck me."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)