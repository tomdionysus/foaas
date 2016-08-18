operation = require '../../lib/operations/particular'

describe "/particular", ->
  it "should have the correct name", ->
    expect(operation.name).toEqual('This Thing In Particular')

  it "should have the correct url", ->
    expect(operation.url).toEqual('/particular/:thing/:from')

  it "should have the correct fields", ->
    expect(operation.fields).toEqual([
      { name: 'Thing', field: 'thing'}
      { name: 'From', field: 'from'}
    ])

  describe 'register', ->
    it 'should call app.get with correct url', ->
      app =
        get: jasmine.createSpy()

      operation.register(app,null)

      expect(app.get).toHaveBeenCalled()
      expect(app.get.argsForCall[0][0]).toEqual('/particular/:thing/:from')

    it 'should call output with correct params', ->
      func = null
      app =
        get: (url, fn) -> func = fn
      output = jasmine.createSpy()
      operation.register(app, output)

      req = 
        params:
          name: "TESTTHING"
          from: "TESTFROM"

      message = "Fuck this #{req.params.thing} in particular."
      subtitle = "- #{req.params.from}"

      func(req,'RES')
      expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle)
