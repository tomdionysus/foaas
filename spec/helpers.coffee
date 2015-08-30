path = require('path')
coffeeCoverage = require('coffee-coverage')
projectRoot = path.resolve(__dirname, '../..')
coverageVar = coffeeCoverage.findIstanbulVariable()

# Only write a coverage report if we're not running inside of Istanbul.
writeOnExit = if coverageVar == null then projectRoot + '/coverage/coverage-coffee.json' else null
coffeeCoverage.register
  instrumentor: 'istanbul'
  basePath: projectRoot+"/lib"
  exclude: []
  coverageVar: coverageVar
  writeOnExit: writeOnExit
  initAll: true
