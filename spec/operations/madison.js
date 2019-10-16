// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const operation = require('../../lib/operations/madison');

describe("/madison", function() {
  it("should have the correct name", () => expect(operation.name).toEqual('Madison'));

  it("should have the correct url", () => expect(operation.url).toEqual('/madison/:name/:from'));

  it("should have the correct fields", () =>
    expect(operation.fields).toEqual([
      { name: 'Name', field: 'name'},
      { name: 'From', field: 'from'}
    ])
  );

  return describe('register', function() {
    it('should call app.get with correct url', function() {
      const app =
        {get: jasmine.createSpy()};

      operation.register(app,null);

      expect(app.get).toHaveBeenCalledWith('/madison/:name/:from', jasmine.any(Function));
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

      const message = `What you've just said is one of the most insanely idiotic things I have ever heard, ${req.params.name}. At no point in your rambling, incoherent response were you even close to anything that could be considered a rational thought. Everyone in this room is now dumber for having listened to it. I award you no points ${req.params.name}, and may God have mercy on your soul.`;
      const subtitle = `- ${req.params.from}`;

      func(req,'RES');
      return expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle);
    });
  });
});