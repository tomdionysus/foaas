module.exports =
  name: "This Thing In Particular"
  url: '/particular/:thing/:from'
  fields: [
    { name: 'Thing', field: 'thing'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/particular/:thing/:from', (req, res) ->
      message = "Fuck this #{req.params.thing} in particular."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
