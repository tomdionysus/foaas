module.exports =
  name: "Field of Fucks"
  url: '/field/:name/:from/:reference'
  fields: [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
    { name: 'Reference', field: 'reference'}
  ]

  register: (app, output) ->
    app.get '/field/:name/:from/:reference', (req, res) ->
      message = "And #{req.params.from} said unto #{req.params.name}, 'Verily, cast thine eyes upon the field in which I grow my fucks', and #{req.params.name} gave witness unto the field, and saw that it was barren."
      subtitle = "- #{req.params.reference}"
      output(req, res, message, subtitle)
