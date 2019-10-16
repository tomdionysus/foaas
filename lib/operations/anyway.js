// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
module.exports = {
  name: "Who the fuck are you anyway",
  url: '/anyway/:company/:from',
  fields: [
    { name: 'Company', field: 'company'},
    { name: 'From', field: 'from'}
  ],

  register(app, output) {
    return app.get('/anyway/:company/:from', function(req, res) {
      const message = `Who the fuck are you anyway, ${req.params.company}, why are you stirring up so much trouble, and, who pays you?`;
      const subtitle = `- ${req.params.from}`;
      return output(req, res, message, subtitle);
    });
  }
};
