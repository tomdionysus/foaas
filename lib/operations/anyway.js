module.exports =
  name: "Who the fuck are you anyway"
  url: '/anyway/:company/:from'
  fields: [
    { name: 'Company', field: 'company'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/anyway/:company/:from', (req, res) ->
      message = "Who the fuck are you anyway, #{req.params.company}, why are you stirring up so much trouble, and, who pays you?"
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)
