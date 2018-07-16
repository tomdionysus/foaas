// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const operation = require('../../lib/operations/particular');

describe("/particular", function() {
  it("should have the correct name", () => expect(operation.name).toEqual('This Thing In Particular'));

  it("should have the correct url", () => expect(operation.url).toEqual('/particular/:thing/:from'));

  it("should have the correct fields", () =>
    expect(operation.fields).toEqual([
      { name: 'Thing', field: 'thing'},
      { name: 'From', field: 'from'}
    ])
  );

  return describe('register', function() {
    it('should call app.get with correct url', function() {
      const app =
        {get: jasmine.createSpy()};

      operation.register(app,null);

      expect(app.get).toHaveBeenCalledWith('/particular/:thing/:from', jasmine.any(Function));
    });

    return it('should call output with correct params', function() {
      let func = null;
      const app =
        {get(url, fn) { return func = fn; }};
      const output = jasmine.createSpy();
      operation.register(app, output);

      const req = { 
        params: {
          name: "TESTTHING",
          from: "TESTFROM"
        }
      };

      const message = `Fuck this ${req.params.thing} in particular.`;
      const subtitle = `- ${req.params.from}`;

      func(req,'RES');
      return expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle);
    });
  });
});
