operation = require '../../lib/operations/random'
path = require 'path'
BaseOperation = require path.resolve(__dirname,'../../lib/baseOperation')

describe "/random", ->
  it "should have the correct name", ->
    expect(operation.name).toEqual('Random')

  it "should have the correct url", ->
    expect(operation.url).toEqual('/random/:name/:from')

  it "should have the correct fields", ->
    expect(operation.fields).toEqual([
      { name: 'Name', field: 'name'}
      { name: 'From', field: 'from'}
    ])

  describe 'register', ->
    it 'should call app.get with correct url', ->
      app =
        get: jasmine.createSpy()

      operation.register(app,null)

      expect(app.get).toHaveBeenCalled()
      expect(app.get.argsForCall[0][0]).toEqual('/random/:name/:from')

    it 'should call output with correct params', ->
      func = null
      app =
        get: (url, fn) -> func = fn
      output = jasmine.createSpy()
      operation.register(app, output)

      req = 
        params:
          name: "TESTNAME"
          from: "TESTFROM"

      func(req,'RES')
      expect(output).toHaveBeenCalled()
      expect(output.mostRecentCall.args[0]).toMatch(req)
      expect(output.mostRecentCall.args[1]).toMatch('RES')
      expect(output.mostRecentCall.args[2]).toBeTruthy()
      expect(output.mostRecentCall.args[3]).toBeTruthy()

  describe 'handler', ->
    
    it 'should call a random operation', ->

      class FuckThat extends BaseOperation

        handler: (req, res, output) ->
          message = "Fuck that."
          subtitle = "- #{req.params.from}"
          output(req, res, message, subtitle)

      class FuckThis extends BaseOperation

        handler: (req, res, output) ->
          message = "Fuck this."
          subtitle = "- #{req.params.from}"
          output(req, res, message, subtitle)

      fuckThat = new FuckThat "Fuck That", '/that/:from', [{ name: 'From', field: 'from'}]
      fuckThis = new FuckThis "Fuck This", '/this/:from', [{ name: 'From', field: 'from'}]

      func = null
      app =
        get: (url, fn) -> func = fn
      output = jasmine.createSpy()
      operations = [fuckThat, fuckThis]
      operation.register(app, output, null, operations)

      req = 
        params:
          name: "TESTNAME"
          from: "TESTFROM"

      func(req,'RES')
      expect(output.mostRecentCall.args[0]).toMatch(req)
      expect(output.mostRecentCall.args[1]).toMatch('RES')
      expect(output.mostRecentCall.args[2]).toMatch(/^Fuck (this|that)\.$/)
      expect(output.mostRecentCall.args[3]).toBeTruthy('- TESTFROM')