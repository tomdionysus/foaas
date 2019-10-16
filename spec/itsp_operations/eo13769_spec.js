// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const operation = require('../../lib/itsp_operations/eo13769');

describe("/eo13769", function() {
  it("should have the correct name", () => expect(operation.name).toEqual('Executive Order 13769'));

  it("should have the correct url", () => expect(operation.url).toEqual('/eo13769'));

  return describe('register', function() {
    it('should call app.get with correct url', function() {
      const app =
        {get: jasmine.createSpy()};

      operation.register(app, null);
      expect(app.get).toHaveBeenCalledWith('/eo13769', jasmine.any(Function));
    });

    return it('should call output with correct params', function() {
      let func = null;
      const app =
        {get(url, fn) { return func = fn; }};
      const output = jasmine.createSpy();
      operation.register(app, output);

      const req = {
         params: {
           from: "TESTFROM"
         }
       };

      func(req,'RES');
      return expect(output).toHaveBeenCalledWith(
        req,
        'RES',
        'At this time, Executive Order 13769 (AKA the Muslim Ban) has been put on hold by the Ninth Circuit Court. Victory!',
        'The vote was 3-0 against Donald Trump'
      );
    });
  });
});
