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
      message = "And #{req.params.name} said unto #{req.params.from}, 'Verily, cast thine eyes upon the field in which I grow my fucks', and #{req.params.from} gave witness unto the field, and saw that it was barren."
      subtitle = "- #{req.params.reference}"
      output(req, res, message, subtitle)