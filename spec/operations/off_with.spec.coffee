operation = require '../../lib/operations/off_with'

describe "/off_with", ->
  it "should have the correct name", ->
    expect(operation.name).toEqual('Fuck Off With')

  it "should have the correct url", ->
    expect(operation.url).toEqual('/off-with/:behavior/:from')

  it "should have the correct fields", ->
    expect(operation.fields).toEqual([
      {name: 'Behavior', field: 'behavior'}
      {name: 'From', field: 'from'}
    ])

  describe 'register', ->
    it 'should call app.get with correct url', ->
      app =
        get: jasmine.createSpy()

      operation.register(app, null)

      expect(app.get).toHaveBeenCalled()
      expect(app.get.argsForCall[0][0]).toEqual('/off-with/:behavior/:from')

    it 'should call output with correct params', ->
      func = null
      app =
        get: (url, fn) -> func = fn
      output = jasmine.createSpy()
      operation.register(app, output)

      req =
        params:
          behavior: "the constant stupid emails to our team that we don't give a shit about!!"
          from: 'Bubbles'

      func(req, 'RES')
      expect(output).toHaveBeenCalledWith(
        req,
        'RES',
        "Fuck off with the constant stupid emails to our team that we don't give a shit about!!",
        '- Bubbles'
      )
