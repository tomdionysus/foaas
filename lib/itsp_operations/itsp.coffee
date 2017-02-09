module.exports =
  name: "Yes He Is"
  url: '/itsp/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/itsp/:name/:from', (req, res) ->
      message = "Sadly Yes, #{req.params.name}, Donald Trump is still the US President."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
