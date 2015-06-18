path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Ballmer extends BaseOperation

  handler: (req, res, output) ->
    message = "Fucking #{req.params.name} is a fucking pussy. I'm going to fucking bury that guy, I have done it before, and I will do it again. I'm going to fucking kill #{req.params.company}."
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new Ballmer "Ballmer", '/ballmer/:name/:company/:from', [
  { name: 'Name', field: 'name'}
    { name: 'Company', field: 'company'}
    { name: 'From', field: 'from'}
  ], true