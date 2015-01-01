module.exports =
  name: "Linus"
  url: '/linus/:name/:from'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]

  register: (app, output) ->
    app.get '/linus/:name/:from', (req, res) ->
      message = "#{req.params.name}, there aren't enough swear-words in the English language, so now I'll have to call you perkeleen vittupää just to express my disgust and frustration with this crap."
      subtitle = "- #{req.params.from}"
      output(req, res, message, subtitle)