operation = require '../../lib/itsp_operations/eo13769'

describe "/eo13769", ->
  it "should have the correct name", ->
    expect(operation.name).toEqual('Executive Order 13769')

  it "should have the correct url", ->
    expect(operation.url).toEqual('/eo13769')

  describe 'register', ->
    it 'should call app.get with correct url', ->
      app =
        get: jasmine.createSpy()

      operation.register(app, null)

      expect(app.get).toHaveBeenCalled()
      expect(app.get.argsForCall[0][0]).toEqual('/eo13769')

    it 'should call output with correct params', ->
      func = null
      app =
        get: (url, fn) -> func = fn
      output = jasmine.createSpy()
      operation.register(app, output)

      req =
         params:
           from: "TESTFROM"

      func(req,'RES')
      expect(output).toHaveBeenCalledWith(
        req,
        'RES',
        'At this time, Executive Order 13769 (AKA the Muslim Ban) has been put on hold by the Ninth Circuit Court. Victory!',
        'The vote was 3-0 against Donald Trump'
      )
