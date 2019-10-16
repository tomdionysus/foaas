operation = require '../../lib/operations/caniuse'

describe "/caniuse", ->
  it "should have the correct name", ->
    expect(operation.name).toEqual('Can I Use')

  it "should have the correct url", ->
    expect(operation.url).toEqual('/caniuse/:tool/:from')

  it "should have the correct fields", ->
    expect(operation.fields).toEqual([
      { name: 'Tool', field: 'tool'}
      { name: 'From', field: 'from'}
    ])

  describe 'register', ->
    it 'should call app.get with correct url', ->
      app =
        get: jasmine.createSpy()

      operation.register(app,null)

      expect(app.get).toHaveBeenCalled()
      expect(app.get.argsForCall[0][0]).toEqual('/caniuse/:tool/:from')

    it 'should call output with correct params', ->
      func = null
      app =
        get: (url, fn) -> func = fn
      output = jasmine.createSpy()
      operation.register(app, output)

      req = 
        params:
          tool: "TESTNAME"
          from: "TESTFROM"

      message = "Can you use #{req.params.tool}? Fuck no!"
      subtitle = "- #{req.params.from}"

      func(req,'RES')
      expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle)