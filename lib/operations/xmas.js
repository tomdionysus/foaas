module.exports =
  name: "Xmas"
  url: '/xmas/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/xmas/:name/:from', (req, res) ->
      message = "Merry Fucking Christmas, #{req.params.name}."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)