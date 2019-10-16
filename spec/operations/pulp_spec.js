// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const operation = require('../../lib/operations/pulp');

describe("/pulp", function() {
  it("should have the correct name", () => expect(operation.name).toEqual('Pulp'));

  it("should have the correct url", () => expect(operation.url).toEqual('/pulp/:language/:from'));

  it("should have the correct fields", () =>
    expect(operation.fields).toEqual([
      { name: 'Language', field: 'language'},
      { name: 'From', field: 'from'}
    ])
  );

  return describe('register', function() {
    it('should call app.get with correct url', function() {
      const app =
        {get: jasmine.createSpy()};

      operation.register(app,null);

      expect(app.get).toHaveBeenCalledWith('/pulp/:language/:from', jasmine.any(Function));
    });

    return it('should call output with correct params', function() {
      let func = null;
      const app =
        {get(url, fn) { return func = fn; }};
      const output = jasmine.createSpy();
      operation.register(app, output);

      const req = {
        params: {
          language: "English",
          from: "Jules Winnfield"
        }
      };

      const message = `${req.params.language}, motherfucker, do you speak it?`;
      const subtitle = `- ${req.params.from}`;

      func(req,'RES');
      return expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle);
    });
  });
});
