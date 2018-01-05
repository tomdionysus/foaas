module.exports =
  name: "Unique"
  url: '/unique/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/unique/:name/:from', (req, res) ->
      message = "#{req.params.name}, I just wanted to know that you are unique and that I appreciate that there is only one of you."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)