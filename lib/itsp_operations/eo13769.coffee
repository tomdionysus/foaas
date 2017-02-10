module.exports =
  name: "Executive Order 13769"
  url: '/eo13769/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/eo13769/:from', (req, res) ->
      message = "At this time, Executive Order 13769 (AKA the Muslim Ban) has been put on hold by the Ninth Circuit Court. Victory!"
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
