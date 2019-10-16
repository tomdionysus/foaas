// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const renderer = require(__dirname+'/../../lib/renderers/xml');

describe("XML Renderer", function() {
  it("should have the correct name", () => expect(renderer.name).toEqual('XML'));

  it("should have the correct mime type", () => expect(renderer.mime).toEqual('application/xml'));

  return describe('render', function() {

    it('should call res.set with Content-Type header', function() {
      const req = {
        message: 'ONE',
        subtitle: 'TWO'
      };
      const res = {
        set: jasmine.createSpy(),
        send: jasmine.createSpy()
      };
      renderer.render(req,res);

      return expect(res.set).toHaveBeenCalledWith('Content-Type', 'application/xml');
    });

    it('should call res.send with correct params', function() {
      const req = {
        message: 'ONE',
        subtitle: 'TWO'
      };
      const res = {
        set: jasmine.createSpy(),
        send: jasmine.createSpy()
      };
      renderer.render(req,res);

      return expect(res.send).toHaveBeenCalledWith(`<?xml version="1.0" encoding="UTF-8"?> \
<foaas:response xmlns:foaas="http://foaas.com/fuckoff"> \
<foaas:message>ONE</foaas:message> \
<foaas:subtitle>TWO</foaas:subtitle> \
</foaas:response>`);
    });
   
    return it('should sanitize params', function() {
      const req = {
        message: '<one>ONE</one>',
        subtitle: '<two>TWO</two>'
      };
      const res = {
        set: jasmine.createSpy(),
        send: jasmine.createSpy()
      };
      renderer.render(req,res);

      return expect(res.send).toHaveBeenCalledWith(`<?xml version="1.0" encoding="UTF-8"?> \
<foaas:response xmlns:foaas="http://foaas.com/fuckoff"> \
<foaas:message>&lt;one&gt;ONE&lt;/one&gt;</foaas:message> \
<foaas:subtitle>&lt;two&gt;TWO&lt;/two&gt;</foaas:subtitle> \
</foaas:response>`);
    });
  });
});
   