operation = require '../../lib/operations/field'

describe "/field", ->
  it "should have the correct name", ->
    expect(operation.name).toEqual('Field of Fucks')

  it "should have the correct url", ->
    expect(operation.url).toEqual('/field/:name/:from/:reference')

  it "should have the correct fields", ->
    expect(operation.fields).toEqual([
      { name: 'Name', field: 'name'}
      { name: 'From', field: 'from'}
      { name: 'Reference', field: 'reference'}
    ])

  describe 'register', ->
    it 'should call app.get with correct url', ->
      app =
        get: jasmine.createSpy()

      operation.register(app,null)

      expect(app.get).toHaveBeenCalled()
      expect(app.get.argsForCall[0][0]).toEqual('/field/:name/:from/:reference')

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
          reference: "TESTREFERENCE"

      message = "And #{req.params.name} said unto #{req.params.from}, 'Verily, cast thine eyes upon the field in which I grow my fucks', and #{req.params.from} gave witness unto the field, and saw that it was barren."
      subtitle = "- #{req.params.reference}"

      func(req,'RES')
      expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle)