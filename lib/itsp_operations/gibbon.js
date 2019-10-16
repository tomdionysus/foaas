module.exports =
  name: "Gibbon Quote"
  url: '/gibbon/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/gibbon/:name/:from', (req, res) ->
      message = "Yes, #{req.params.name}, the fascist, loofa-faced shit-gibbon Donald Trump is still the US President."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
