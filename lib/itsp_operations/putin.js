// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
module.exports = {
  name: "Putin really is",
  url: '/putin/:name/:from',
  fields: [
    { name: 'Name', field: 'name'},
    { name: 'From', field: 'from'}
  ],

  register(app, output) {
    return app.get('/putin/:name/:from', function(req, res) {
      const message = `Yes, ${req.params.name}, Donald Trump is the US President, but we all know Putin is really in charge.`;
      const subtitle = `- ${req.params.from}`;
      return output(req, res, message, subtitle);
    });
  }
};
