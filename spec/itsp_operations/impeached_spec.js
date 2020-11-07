// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const operation = require('../../lib/itsp_operations/impeached');

describe("/impeached", function() {
  it("should have the correct name", () => expect(operation.name).toEqual('Has He Been Impeached'));

  it("should have the correct url", () => expect(operation.url).toEqual('/impeached/:name/:from'));

  it("should have the correct fields", () => expect(operation.fields).toEqual([ { name : 'Name', field : 'name' }, { name : 'From', field : 'from' }]));

  return describe('register', function() {
    it('should call app.get with correct url', function() {
      const app =
        {get: jasmine.createSpy()};

      operation.register(app, null);

      expect(app.get).toHaveBeenCalledWith('/impeached/:name/:from', jasmine.any(Function));
    });

    return it('should call output with correct params', function() {
      let func = null;
      const app =
        {get(url, fn) { return func = fn; }};
      const output = jasmine.createSpy();
      operation.register(app, output);

      const req = {
        params: {
          name: "TESTNAME",
          from: "TESTFROM"
        }
      };

      func(req,'RES');
      return expect(output).toHaveBeenCalledWith(
        req,
        'RES',
        'Yes, TESTNAME, Donald Trump has been impeached, but was not convicted.',
        '- TESTFROM'
      );
    });
  });
});
