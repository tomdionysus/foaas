const operation = require('../../lib/operations/ratsarse');

describe("/ratsarse", function() {
  it("should have the correct name", () => expect(operation.name).toEqual("Rat's Arse"));

  it("should have the correct url", () => expect(operation.url).toEqual('/ratsarse/:from'));

  it("should have the correct fields", () =>
    expect(operation.fields).toEqual([
      { name: 'From', field: 'from'}
    ])
  );

  return describe('register', function() {
    it('should call app.get with correct url', function() {
      const app =
        {get: jasmine.createSpy()};

      operation.register(app,null);

      expect(app.get).toHaveBeenCalledWith('/ratsarse/:from', jasmine.any(Function));
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

      const message = "I don't give a rat's arse.";
      const subtitle = `- ${req.params.from}`;

      func(req,'RES');
      return expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle);
    });
  });
});
