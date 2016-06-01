operation = require '../../lib/operations/anyway'

describe "/anyway", ->
  it "should have the correct name", ->
    expect(operation.name).toEqual('Who the fuck are you anyway')

  it "should have the correct url", ->
    expect(operation.url).toEqual('/anyway/:company/:from')

  it "should have the correct fields", ->
    expect(operation.fields).toEqual([
      { name: 'Company', field: 'company'}
      { name: 'From', field: 'from'}
    ])

  describe 'register', ->
    it 'should call app.get with correct url', ->
      app =
        get: jasmine.createSpy()

      operation.register(app,null)

      expect(app.get).toHaveBeenCalled()
      expect(app.get.argsForCall[0][0]).toEqual('/anyway/:company/:from')

    it 'should call output with correct params', ->
      func = null
      app =
        get: (url, fn) -> func = fn
      output = jasmine.createSpy()
      operation.register(app, output)

      req =
        params:
          company: "TESTCOMPANY"
          from: "TESTFROM"

      message = "Who the fuck are you anyway, #{req.params.company}, why are you stirring up so much trouble, and, who pays you?"
      subtitle = "- #{req.params.from}"

      func(req,'RES')
      expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle)
