module.exports =
  name: "Type 1 Diabetes"
  url: '/diabetes1/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/diabetes1/:from', (req, res) ->
      message = "I'd love to stop and chat to you, but I'd rather have type 1 diabetes."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)