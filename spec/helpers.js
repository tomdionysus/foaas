// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
const path = require('path');
const coffeeCoverage = require('coffee-coverage');
const projectRoot = path.resolve(__dirname, '../..');
const coverageVar = coffeeCoverage.findIstanbulVariable();

// Only write a coverage report if we're not running inside of Istanbul.
const writeOnExit = coverageVar === null ? projectRoot + '/coverage/coverage-coffee.json' : null;
coffeeCoverage.register({
  instrumentor: 'istanbul',
  basePath: projectRoot+"/lib",
  exclude: [],
  coverageVar,
  writeOnExit,
  initAll: true
});
