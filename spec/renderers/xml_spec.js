renderer = require __dirname+'/../../lib/renderers/xml'

describe "XML Renderer", ->
  it "should have the correct name", ->
    expect(renderer.name).toEqual('XML')

  it "should have the correct mime type", ->
    expect(renderer.mime).toEqual('application/xml')

  describe 'render', ->

    it 'should call res.set with Content-Type header', ->
      req =
        message: 'ONE'
        subtitle: 'TWO'
      res =
        set: jasmine.createSpy()
        send: jasmine.createSpy()
      renderer.render(req,res)

      expect(res.set).toHaveBeenCalledWith('Content-Type', 'application/xml')

    it 'should call res.send with correct params', ->
      req =
        message: 'ONE'
        subtitle: 'TWO'
      res =
        set: jasmine.createSpy()
        send: jasmine.createSpy()
      renderer.render(req,res)

      expect(res.send).toHaveBeenCalledWith('<?xml version="1.0" encoding="UTF-8"?>
<foaas:response xmlns:foaas="http://foaas.com/fuckoff">
  <foaas:message>ONE</foaas:message>
  <foaas:subtitle>TWO</foaas:subtitle>
</foaas:response>')
   
    it 'should sanitize params', ->
      req =
        message: '<one>ONE</one>'
        subtitle: '<two>TWO</two>'
      res =
        set: jasmine.createSpy()
        send: jasmine.createSpy()
      renderer.render(req,res)

      expect(res.send).toHaveBeenCalledWith('<?xml version="1.0" encoding="UTF-8"?>
<foaas:response xmlns:foaas="http://foaas.com/fuckoff">
  <foaas:message>&lt;one&gt;ONE&lt;/one&gt;</foaas:message>
  <foaas:subtitle>&lt;two&gt;TWO&lt;/two&gt;</foaas:subtitle>
</foaas:response>')
   