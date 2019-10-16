// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
module.exports = {
  name: "Fuck This Shit",
  url: '/shit/:from',
  fields: [
    { name: 'From', field: 'from'}
  ],

  register(app, output) {
    return app.get('/shit/:from', function(req, res) {
      const message = "Fuck this shit!";
      const subtitle = `- ${req.params. from}`;
      return output(req, res, message, subtitle);
    });
  }
};