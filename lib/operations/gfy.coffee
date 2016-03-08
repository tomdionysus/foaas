module.exports =
  name: "Golf Foxtrot Yankee"
  url: '/gfy/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/gfy/:name/:from', (req, res) ->
      message = "Golf foxtrot yankee, #{req.params.name}."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)