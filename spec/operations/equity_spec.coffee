operation = require '../../lib/operations/equity'

describe "/equity", ->
  it "should have the correct name", ->
    expect(operation.name).toEqual('Equity')

  it "should have the correct url", ->
    expect(operation.url).toEqual('/equity/:name/:from')

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
      expect(app.get.argsForCall[0][0]).toEqual('/equity/:name/:from')

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

      message = "Equity only? Long hours? Zero Pay? Well TESTNAME, just sign me right the fuck up."
      subtitle = "- TESTFROM"

      func(req,'RES')
      expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle)