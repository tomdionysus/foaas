operation = require '../../lib/operations/greed'

describe "/greed", ->
  it "should have the correct noun", ->
    expect(operation.name).toEqual('Greed')

  it "should have the correct url", ->
    expect(operation.url).toEqual('/greed/:noun/:from')

  it "should have the correct fields", ->
    expect(operation.fields).toEqual([
      { name: 'Noun', field: 'noun'}
      { name: 'From', field: 'from'}
    ])

  describe 'register', ->
    it 'should call app.get with correct url', ->
      app =
        get: jasmine.createSpy()

      operation.register(app,null)

      expect(app.get).toHaveBeenCalled()
      expect(app.get.argsForCall[0][0]).toEqual('/greed/:noun/:from')

    it 'should call output with correct params', ->
      func = null
      app =
        get: (url, fn) -> func = fn
      output = jasmine.createSpy()
      operation.register(app, output)

      req = 
        params:
          noun: "TESTNOUN"
          from: "TESTFROM"

      message = """The point is, ladies and gentleman, that #{req.params.noun.toLowerCase()} -- for lack of a better word -- is good. #{req.params.noun} is right. #{req.params.noun} works. #{req.params.noun} clarifies, cuts through, and captures the essence of the evolutionary spirit. #{req.params.noun}, in all of its forms -- #{req.params.noun} for life, for money, for love, knowledge -- has marked the upward surge of mankind."""
      subtitle = "- #{req.params.from}"

      func(req,'RES')
      expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle)
