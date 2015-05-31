renderer = require __dirname+'/../../lib/renderers/json'

describe "Json/JsonP Renderer", ->
  it "should have the correct name", ->
    expect(renderer.name).toEqual('JSON')

  it "should have the correct mime type", ->
    expect(renderer.mime).toEqual('application/json')

  describe 'render', ->
    it 'should call res.jsonp with correct params', ->
      req =
        message: 'ONE'
        subtitle: 'TWO'
      res =
        jsonp: jasmine.createSpy()
      renderer.render(req,res)

      expect(res.jsonp).toHaveBeenCalledWith({ message: 'ONE', subtitle: 'TWO' })