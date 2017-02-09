module.exports =
  name: "Bannon really is"
  url: '/bannon/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/bannon/:name/:from', (req, res) ->
      message = "Yes, #{req.params.name}, Donald Trump is US President, but we all know Steve Bannon is really in charge."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
