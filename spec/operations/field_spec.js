// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const operation = require('../../lib/operations/field');

describe("/field", function() {
  it("should have the correct name", () => expect(operation.name).toEqual('Field of Fucks'));

  it("should have the correct url", () => expect(operation.url).toEqual('/field/:name/:from/:reference'));

  it("should have the correct fields", () =>
    expect(operation.fields).toEqual([
      { name: 'Name', field: 'name'},
      { name: 'From', field: 'from'},
      { name: 'Reference', field: 'reference'}
    ])
  );

  return describe('register', function() {
    it('should call app.get with correct url', function() {
      const app =
        {get: jasmine.createSpy()};

      operation.register(app,null);

      expect(app.get).toHaveBeenCalledWith('/field/:name/:from/:reference', jasmine.any(Function));
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
          from: "TESTFROM",
          reference: "TESTREFERENCE"
        }
      };

      const message = `And ${req.params.name} said unto ${req.params.from}, 'Verily, cast thine eyes upon the field in which I grow my fucks', and ${req.params.from} gave witness unto the field, and saw that it was barren.`;
      const subtitle = `- ${req.params.reference}`;

      func(req,'RES');
      return expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle);
    });
  });
});