path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class FieldofFucks extends BaseOperation

  handler: (req, res, output) ->
    message = "And #{req.params.name} said unto #{req.params.from}, 'Verily, cast thine eyes upon the field in which I grow my fucks', and #{req.params.from} gave witness unto the field, and saw that it was barren."
    subtitle = "- #{req.params.reference}"
    output(req, res, message, subtitle)

module.exports = new FieldofFucks "Field of Fucks", '/field/:name/:from/:reference', [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
    { name: 'Reference', field: 'reference'}
  ], true