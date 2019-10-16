module.exports =
  name: "Ballmer"
  url: '/ballmer/:name/:company/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'Company', field: 'company'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/ballmer/:name/:company/:from', (req, res) ->
      message = "Fucking #{req.params.name} is a fucking pussy. I'm going to fucking bury that guy, I have done it before, and I will do it again. I'm going to fucking kill #{req.params.company}."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)