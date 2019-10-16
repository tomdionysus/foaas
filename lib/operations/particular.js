// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
module.exports = {
  name: "This Thing In Particular",
  url: '/particular/:thing/:from',
  fields: [
    { name: 'Thing', field: 'thing'},
    { name: 'From', field: 'from'}
  ],

  register(app, output) {
    return app.get('/particular/:thing/:from', function(req, res) {
      const message = `Fuck this ${req.params.thing} in particular.`;
      const subtitle = `- ${req.params.from}`;
      return output(req, res, message, subtitle);
    });
  }
};
