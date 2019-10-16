module.exports =
  name: "Has He Released His Taxes"
  url: '/taxes/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/taxes/:name/:from', (req, res) ->
      message = "Unfortunately No, #{req.params.name}, Donald Trump still has not released his fucking taxes."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
