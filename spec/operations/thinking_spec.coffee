operation = require '../../lib/operations/thinking'

describe "/thinking", ->
  it "should have the correct name", ->
    expect(operation.name).toEqual('Thinking')

  it "should have the correct url", ->
    expect(operation.url).toEqual('/thinking/:name/:from')

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
      expect(app.get.argsForCall[0][0]).toEqual('/thinking/:name/:from')

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

      message = "#{req.params.name}, what the fuck were you actually thinking?"
      subtitle = "- #{req.params.from}"

      func(req,'RES')
      expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle)
