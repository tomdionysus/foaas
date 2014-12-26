renderer = require __dirname+'/../../lib/renderers/xml'

describe "XML Renderer", ->
  it "should have the correct name", ->
    expect(renderer.name).toEqual('XML')

  it "should have the correct mime type", ->
    expect(renderer.mime).toEqual('application/xml')

  describe 'render', ->

    it 'should call res.set with Content-Type header', ->
      res =
        set: jasmine.createSpy()
        send: jasmine.createSpy()
      renderer.render(res,'ONE','TWO')

      expect(res.set).toHaveBeenCalledWith('Content-Type', 'application/xml')

    it 'should call res.send with correct params', ->
      res =
        set: jasmine.createSpy()
        send: jasmine.createSpy()
      renderer.render(res,'ONE','TWO')

      expect(res.send).toHaveBeenCalledWith('<?xml version="1.0" encoding="UTF-8"?>
<foaas:response xmlns:foaas="http://foaas.com/fuckoff">
  <foaas:message>ONE</foaas:message>
  <foaas:subtitle>TWO</foaas:subtitle>
</foaas:response>')
   
    it 'should sanitize params', ->
      res =
        set: jasmine.createSpy()
        send: jasmine.createSpy()
      renderer.render(res,'<one>ONE</one>','<two>TWO</two>')

      expect(res.send).toHaveBeenCalledWith('<?xml version="1.0" encoding="UTF-8"?>
<foaas:response xmlns:foaas="http://foaas.com/fuckoff">
  <foaas:message>&lt;one&gt;ONE&lt;/one&gt;</foaas:message>
  <foaas:subtitle>&lt;two&gt;TWO&lt;/two&gt;</foaas:subtitle>
</foaas:response>')
   