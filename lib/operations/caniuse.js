// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
module.exports = {
  name: "Can I Use",
  url: '/caniuse/:tool/:from',
  fields: [
    { name: 'Tool', field: 'tool'},
    { name: 'From', field: 'from'}
  ],

  register(app, output) {
    return app.get('/caniuse/:tool/:from', function(req, res) {
      const message = `Can you use ${req.params.tool}? Fuck no!`;
      const subtitle = `- ${req.params.from}`;
      return output(req, res, message, subtitle);
    });
  }
};