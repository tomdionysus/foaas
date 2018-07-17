// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const operation = require('../../lib/operations/keepcalm');

describe("/keepcalm", function() {
	it("should have the correct name", () => expect(operation.name).toEqual('Keep Calm'));

	it("should have the correct url", () => expect(operation.url).toEqual('/keepcalm/:reaction/:from'));

	it("should have the correct fields", () =>
		expect(operation.fields).toEqual([
			{ name: 'Reaction', field: 'reaction'},
			{ name: 'From', field: 'from'}
		])
	);

	return describe('register', function() {
		it('should call app.get with correct url', function() {
			const app =
				{get: jasmine.createSpy()};

			operation.register(app,null);

			expect(app.get).toHaveBeenCalled();
			return expect(app.get.argsForCall[0][0]).toEqual('/keepcalm/:reaction/:from');
		});

		return it('should call output with correct params', function() {
			let func = null;
			const app =
				{get(url, fn) { return func = fn; }};
			const output = jasmine.createSpy();
			operation.register(app, output);

			const req = {
				params: {
					reaction: "TESTREACTION",
					from: "TESTFROM"
				}
			};

			const message = `Keep the fuck calm and ${req.params.reaction}!`;
			const subtitle = `- ${req.params.from}`;

			func(req,'RES');
			return expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle);
		});
	});
});