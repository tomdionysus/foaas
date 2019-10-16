operation = require '../../lib/operations/version'

describe "/version", ->
  it "should have the correct name", ->
    expect(operation.name).toEqual('Version')

  it "should have the correct url", ->
    expect(operation.url).toEqual('/version')

  it "should have the correct fields", ->
    expect(operation.fields).toEqual([])

  describe 'register', ->
    it 'should call app.get with correct url', ->
      app =
        get: jasmine.createSpy()

      operation.register(app,null,1)

      expect(app.get).toHaveBeenCalled()
      expect(app.get.argsForCall[0][0]).toEqual('/version')

    it 'should call output with correct params', ->
      func = null
      app =
        get: (url, fn) -> func = fn
      output = jasmine.createSpy()
      operation.register(app, output, 1234)

      req = 
        params:
          from: "TESTFROM"

      func(req,'RES')
      expect(output).toHaveBeenCalledWith(
        req,
        'RES',
        "Version 1234",
        'FOAAS'
      )