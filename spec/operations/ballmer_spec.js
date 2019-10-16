// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const operation = require('../../lib/operations/ballmer');

describe("/ballmer", function() {
  it("should have the correct name", () => expect(operation.name).toEqual('Ballmer'));

  it("should have the correct url", () => expect(operation.url).toEqual('/ballmer/:name/:company/:from'));

  it("should have the correct fields", () =>
    expect(operation.fields).toEqual([
      { name: 'Name', field: 'name'},
      { name: 'Company', field: 'company'},
      { name: 'From', field: 'from'}
    ])
  );

  return describe('register', function() {
    it('should call app.get with correct url', function() {
      const app =
        {get: jasmine.createSpy()};

      operation.register(app,null);

      expect(app.get).toHaveBeenCalledWith('/ballmer/:name/:company/:from', jasmine.any(Function));
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

      const message = `Fucking ${req.params.name} is a fucking pussy. I'm going to fucking bury that guy, I have done it before, and I will do it again. I'm going to fucking kill ${req.params.company}.`;
      const subtitle = `- ${req.params.from}`;

      func(req,'RES');
      return expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle);
    });
  });
});