path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Random extends BaseOperation

  handler: (req, res, output, version) ->
    if (@operations)
      index = Math.floor(Math.random() * @operations.length)
      randomOperation = @operations[index];
      randomOperation.handler req, res, output
    else
      super

  register: (app, output, version, operations) ->
    # filter excluded operations
    if (operations) 
      @operations = (operation for operation in operations when !operation.excludeFromRandom)
    super
    

module.exports = new Random "Random", '/random/:name/:from', [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ], true