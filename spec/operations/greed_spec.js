// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const operation = require('../../lib/operations/greed');

describe("/greed", function() {
  it("should have the correct noun", () => expect(operation.name).toEqual('Greed'));

  it("should have the correct url", () => expect(operation.url).toEqual('/greed/:noun/:from'));

  it("should have the correct fields", () =>
    expect(operation.fields).toEqual([
      { name: 'Noun', field: 'noun'},
      { name: 'From', field: 'from'}
    ])
  );

  return describe('register', function() {
    it('should call app.get with correct url', function() {
      const app =
        {get: jasmine.createSpy()};

      operation.register(app,null);

      expect(app.get).toHaveBeenCalledWith('/greed/:noun/:from', jasmine.any(Function));
    });

    return it('should call output with correct params', function() {
      let func = null;
      const app =
        {get(url, fn) { return func = fn; }};
      const output = jasmine.createSpy();
      operation.register(app, output);

      const req = { 
        params: {
          noun: "TESTNOUN",
          from: "TESTFROM"
        }
      };

      const message = `The point is, ladies and gentleman, that ${req.params.noun.toLowerCase()} -- for lack of a better word -- is good. ${req.params.noun} is right. ${req.params.noun} works. ${req.params.noun} clarifies, cuts through, and captures the essence of the evolutionary spirit. ${req.params.noun}, in all of its forms -- ${req.params.noun} for life, for money, for love, knowledge -- has marked the upward surge of mankind.`;
      const subtitle = `- ${req.params.from}`;

      func(req,'RES');
      return expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle);
    });
  });
});
