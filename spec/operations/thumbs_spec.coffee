operation = require '../../lib/operations/thumbs'

describe "/thumbs", ->
  it "should have the correct name", ->
    expect(operation.name).toEqual('This Guy')

  it "should have the correct url", ->
    expect(operation.url).toEqual('/thumbs/:name/:from')

  it "should have the correct fields", ->
    expect(operation.fields).toEqual([
      { name: 'From', field: 'from'}
      { name: 'Name', field: 'name'}
    ])

  describe 'register', ->
    it 'should call app.get with correct url', ->
      app =
        get: jasmine.createSpy()

      operation.register(app,null)

      expect(app.get).toHaveBeenCalled()
      expect(app.get.argsForCall[0][0]).toEqual('/thumbs/:name/:from')

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
        "Who has two thumbs and doesn't give a fuck? TESTNAME.",
        '- TESTFROM'
      )