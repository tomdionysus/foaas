module.exports =
  name: "Bag"
  url: '/bag/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/bag/:from', (req, res) ->
      message = "Eat a bag of dicks."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
