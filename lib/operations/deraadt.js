// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
module.exports = {
  name: "{name} you are being the usual slimy hypocritical asshole... You may have had value ten years ago, but people will see that you don't anymore.",
  url: '/deraadt/:name/:from',
  fields: [
    { name: 'Name', field: 'name'},
    { name: 'From', field: 'from'}
  ],

  register(app, output) {
    return app.get('/deraadt/:name/:from', function(req, res) {
      const message = `${req.params.name} you are being the usual slimy hypocritical asshole... You may have had value ten years ago, but people will see that you don't anymore.`;
      const subtitle = `- ${req.params.from}`;
      return output(req, res, message, subtitle);
    });
  }
};
