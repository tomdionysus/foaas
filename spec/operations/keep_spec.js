// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const operation = require('../../lib/operations/keep');

describe("/keep", function() {
  it("should have the correct name", () => expect(operation.name).toEqual('Keep'));

  it("should have the correct url", () => expect(operation.url).toEqual('/keep/:name/:from'));

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

      expect(app.get).toHaveBeenCalledWith('/keep/:name/:from', jasmine.any(Function));
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

      const message = `${req.params.name}: Fuck off. And when you get there, fuck off from there too. Then fuck off some more. Keep fucking off until you get back here. Then fuck off again.`;
      const subtitle = `- ${req.params.from}`;

      func(req,'RES');
      return expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle);
    });
  });
});