module.exports =
  name: "Diabetes"
  url: '/diabetes/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/diabetes/:from', (req, res) ->
      message = "I'd love to stop and chat to you but I'd rather have type 2 diabetes."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)