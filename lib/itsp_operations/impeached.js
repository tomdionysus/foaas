module.exports =
  name: "Has He Been Impeached"
  url: '/impeached/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/impeached/:name/:from', (req, res) ->
      message = "Unfortunately No, #{req.params.name}, Donald Trump has not had impeachment charges filed against him."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
