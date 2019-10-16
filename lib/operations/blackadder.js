module.exports =
  name: "Blackadder"
  url: '/blackadder/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/blackadder/:name/:from', (req, res) ->
      message = "#{req.params.name}, your head is as empty as a eunuch’s underpants. Fuck off!"
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
