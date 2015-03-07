module.exports =
  name: "Bucket"
  url: '/bucket/:from'
  fields: [
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/bucket/:from', (req, res) ->
      message = "Please choke on a bucket of cocks."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
