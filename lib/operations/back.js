module.exports = 
  name: "Back the fuck off"
  url: '/back/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/back/:name/:from', (req, res) ->
      message = "#{req.params.name}, back the fuck off."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)