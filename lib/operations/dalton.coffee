module.exports =
  name: "Dalton"
  url: '/dalton/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/dalton/:name/:from', (req, res) ->
      message = "#{req.params.name}: A fucking problem solving super-hero."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)