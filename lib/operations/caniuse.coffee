module.exports =
  name: "Can I Use"
  url: '/caniuse/:tool/:from'
  fields: [
    { name: 'Tool', field: 'tool'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/caniuse/:tool/:from', (req, res) ->
      message = "Can you use #{req.params.tool}? Fuck no!"
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)