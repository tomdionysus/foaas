// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const operation = require('../../lib/operations/holygrail');

describe("/holygrail", function() {
    it("should have the correct name", () => expect(operation.name).toEqual('Holygrail'));

    it("should have the correct url", () => expect(operation.url).toEqual('/holygrail/:from'));

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

            expect(app.get).toHaveBeenCalledWith('/holygrail/:from', jasmine.any(Function));
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

            const message = "I don't want to talk to you, no more, you empty-headed animal, food trough wiper. I fart in your general direction. You mother was a hamster and your father smelt of elderberries. Now go away or I shall taunt you a second time.";
            const subtitle = `- ${req.params.from}`;

            func(req,'RES');
            return expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle);
        });
    });
});
