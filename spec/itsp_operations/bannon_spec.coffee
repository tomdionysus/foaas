operation = require '../../lib/itsp_operations/bannon'

describe "/bannon", ->
  it "should have the correct name", ->
    expect(operation.name).toEqual('Bannon really is')

  it "should have the correct url", ->
    expect(operation.url).toEqual('/bannon/:name/:from')

  it "should have the correct fields", ->
    expect(operation.fields).toEqual([ { name : 'Name', field : 'name' }, { name : 'From', field : 'from' }])

  describe 'register', ->
    it 'should call app.get with correct url', ->
      app =
        get: jasmine.createSpy()

      operation.register(app, null)

      expect(app.get).toHaveBeenCalled()
      expect(app.get.argsForCall[0][0]).toEqual('/bannon/:name/:from')

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

      func(req,'RES')
      expect(output).toHaveBeenCalledWith(
        req,
        'RES',
        'Yes, TESTNAME, Donald Trump is US President, but we all know Steve Bannon is really in charge.',
        '- TESTFROM'
      )
