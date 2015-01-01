operation = require '../../lib/operations/madison'

describe "/madison", ->
  it "should have the correct name", ->
    expect(operation.name).toEqual('Madison')

  it "should have the correct url", ->
    expect(operation.url).toEqual('/madison/:name/:from')

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
      expect(app.get.argsForCall[0][0]).toEqual('/madison/:name/:from')

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

      message = "What you've just said is one of the most insanely idiotic things I have ever heard, #{req.params.name}. At no point in your rambling, incoherent response were you even close to anything that could be considered a rational thought. Everyone in this room is now dumber for having listened to it. I award you no points #{req.params.name}, and may God have mercy on your soul."
      subtitle = "- #{req.params.from}"

      func(req,'RES')
      expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle)