renderer = require __dirname+'/../../lib/renderers/text'

describe "TEXT Renderer", ->
  it "should have the correct name", ->
    expect(renderer.name).toEqual('Text')

  it "should have the correct mime type", ->
    expect(renderer.mime).toEqual('text/plain')

  describe 'render', ->

    it 'should call res.set with Content-Type header', ->
      req =
        message: 'ONE'
        subtitle: 'TWO'
      res =
        set: jasmine.createSpy()
        send: jasmine.createSpy()
      renderer.render(req,res)

      expect(res.set).toHaveBeenCalledWith('Content-Type', 'text/plain')

    it 'should call res.send with correct params', ->
      req =
        message: 'ONE'
        subtitle: 'TWO'
      res =
        set: jasmine.createSpy()
        send: jasmine.createSpy()
      renderer.render(req,res)

      expect(res.send).toHaveBeenCalledWith('ONE TWO')