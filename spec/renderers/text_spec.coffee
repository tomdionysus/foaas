renderer = require __dirname+'/../../lib/renderers/text'

describe "TEXT Renderer", ->
  it "should have the correct name", ->
    expect(renderer.name).toEqual('Text')

  it "should have the correct mime type", ->
    expect(renderer.mime).toEqual('text/plain')

  describe 'render', ->

    it 'should call res.set with Content-Type header', ->
      res =
        set: jasmine.createSpy()
        send: jasmine.createSpy()
      renderer.render(res,'ONE','TWO')

      expect(res.set).toHaveBeenCalledWith('Content-Type', 'text/plain')

    it 'should call res.send with correct params', ->
      res =
        set: jasmine.createSpy()
        send: jasmine.createSpy()
      renderer.render(res,'ONE','TWO')

      expect(res.send).toHaveBeenCalledWith('ONE TWO')