module.exports =
  name: "Outside"
  url: '/outside/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/outside/:name/:from', (req, res) ->
      message = "#{req.params.name}, why don't you go outside and play hide-and-go-fuck-yourself?"
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)