operation = require '../../lib/operations/deraadt'

describe "/deraadt", ->
  it "should have the correct name", ->
    expect(operation.name).toEqual("{name} you are being the usual slimy hypocritical asshole... You may have had value ten years ago, but people will see that you don't anymore.")

  it "should have the correct url", ->
    expect(operation.url).toEqual('/deraadt/:name/:from')

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
      expect(app.get.argsForCall[0][0]).toEqual('/deraadt/:name/:from')

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

      message = "#{req.params.name} you are being the usual slimy hypocritical asshole... You may have had value ten years ago, but people will see that you don't anymore."
      subtitle = "- #{req.params.from}"

      func(req,'RES')
      expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle)
