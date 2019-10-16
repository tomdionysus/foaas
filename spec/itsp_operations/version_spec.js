// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const operation = require('../../lib/itsp_operations/version');

describe("/version", function() {
  it("should have the correct name", () => expect(operation.name).toEqual('Version'));

  it("should have the correct url", () => expect(operation.url).toEqual('/version'));

  it("should have the correct fields", () => expect(operation.fields).toEqual([]));

  return describe('register', function() {
    it('should call app.get with correct url', function() {
      const app =
        {get: jasmine.createSpy()};

      operation.register(app,null,1);

      expect(app.get).toHaveBeenCalledWith('/version', jasmine.any(Function));
    });

    return it('should call output with correct params', function() {
      let func = null;
      const app =
        {get(url, fn) { return func = fn; }};
      const output = jasmine.createSpy();
      operation.register(app, output, 1234);

      const req = { 
        params: {
          from: "TESTFROM"
        }
      };

      func(req,'RES');
      return expect(output).toHaveBeenCalledWith(
        req,
        'RES',
        "Version 1234",
        'ITSPAAS'
      );
    });
  });
});
