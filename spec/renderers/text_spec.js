// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const renderer = require(__dirname+'/../../lib/renderers/text');

describe("TEXT Renderer", function() {
  it("should have the correct name", () => expect(renderer.name).toEqual('Text'));

  it("should have the correct mime type", () => expect(renderer.mime).toEqual('text/plain'));

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

      return expect(res.set).toHaveBeenCalledWith('Content-Type', 'text/plain');
    });

    return it('should call res.send with correct params', function() {
      const req = {
        message: 'ONE',
        subtitle: 'TWO'
      };
      const res = {
        set: jasmine.createSpy(),
        send: jasmine.createSpy()
      };
      renderer.render(req,res);

      return expect(res.send).toHaveBeenCalledWith('ONE TWO');
    });
  });
});