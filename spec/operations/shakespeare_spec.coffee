operation = require '../../lib/operations/shakespeare'

describe "/shakespeare", ->
  it "should have the correct name", ->
    expect(operation.name).toEqual('Shakespeare')

  it "should have the correct url", ->
    expect(operation.url).toEqual('/shakespeare/:name/:from')

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
      expect(app.get.argsForCall[0][0]).toEqual('/shakespeare/:name/:from')

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

      message = "#{req.params.name}, Thou clay-brained guts, thou knotty-pated fool, thou whoreson obscene greasy tallow-catch!"
      subtitle = "- #{req.params.from}"

      func(req,'RES')
      expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle)