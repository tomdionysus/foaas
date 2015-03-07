module.exports =
  name: "Type 2 Diabetes"
  url: '/diabetes2/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/diabetes2/:from', (req, res) ->
      message = "I'd love to stop and chat to you but I'd rather have type 2 diabetes."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)