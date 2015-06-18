operation = require '../../lib/operations/dosomething'

describe "/dosomething", ->
  it "should have the correct name", ->
    expect(operation.name).toEqual('Do Something')

  it "should have the correct url", ->
    expect(operation.url).toEqual('/dosomething/:do/:something/:from')

  it "should have the correct fields", ->
    expect(operation.fields).toEqual([
		{ name: 'Do', field: 'do'}
		{ name: 'Something', field: 'something'}
		{ name: 'From', field: 'from'}
    ])

  describe 'register', ->
    it 'should call app.get with correct url', ->
      app =
        get: jasmine.createSpy()

      operation.register(app,null)

      expect(app.get).toHaveBeenCalled()
      expect(app.get.argsForCall[0][0]).toEqual('/dosomething/:do/:something/:from')

    it 'should call output with correct params', ->
      func = null
      app =
        get: (url, fn) -> func = fn
      output = jasmine.createSpy()
      operation.register(app, output)

      req = 
        params:
          do: "TESTACTION"
          something: "TESTITEM"
          from: "TESTFROM"

      message = "#{req.params.do} the fucking #{req.params.something}!"
      subtitle = "- #{req.params.from}"

      func(req,'RES')
      expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle)