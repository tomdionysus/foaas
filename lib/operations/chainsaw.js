module.exports =
  name: "Chainsaw"
  url: '/chainsaw/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/chainsaw/:name/:from', (req, res) ->
      message = "Fuck me gently with a chainsaw, #{req.params.name}. Do I look like Mother Teresa?"
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)