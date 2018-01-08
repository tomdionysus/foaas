operation = require '../../lib/operations/question'

describe "/question", ->
  it "should have the correct name", ->
    expect(operation.name).toEqual('Question')

  it "should have the correct url", ->
    expect(operation.url).toEqual('/question/:from')

  it "should have the correct fields", ->
    expect(operation.fields).toEqual([
      { name: 'From', field: 'from'}
    ])

  describe 'register', ->
    it 'should call app.get with correct url', ->
      app =
        get: jasmine.createSpy()

      operation.register(app,null)

      expect(app.get).toHaveBeenCalled()
      expect(app.get.argsForCall[0][0]).toEqual('/question/:from')

    it 'should call output with correct params', ->
      func = null
      app =
        get: (url, fn) -> func = fn
      output = jasmine.createSpy()
      operation.register(app, output)

      req =
        params:
          from: "TESTFROM"

      subtitle = "- #{req.params.from}"

      func(req,'RES')
      expect(output).toHaveBeenCalledWith(
        req,
        'RES',
        'To fuck off, or to fuck off (that is not a question)',
        subtitle
      )
