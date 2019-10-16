// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
module.exports = {
	name: "Do Something",
	url: '/dosomething/:do/:something/:from',
	fields: [
		{ name: 'Do', field: 'do'},
		{ name: 'Something', field: 'something'},
		{ name: 'From', field: 'from'}
	],

	register(app, output) {
		return app.get('/dosomething/:do/:something/:from', function(req, res) {
			const message = `${req.params.do} the fucking ${req.params.something}!`;
			const subtitle = `- ${req.params.from}`;
			return output(req, res, message, subtitle);
		});
	}
};