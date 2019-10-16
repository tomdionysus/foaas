// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
module.exports = {
  name: 'This Guy',
  url: '/thumbs/:name/:from',
  fields: [
    { name: 'From', field: 'from'},
    { name: 'Name', field: 'name'}
  ],

  register(app, output) {
    return app.get('/thumbs/:name/:from', function(req, res) {
      const message = `Who has two thumbs and doesn't give a fuck? ${req.params. name}.`;
      const subtitle = `- ${req.params. from}`;
      return output(req, res, message, subtitle);
    });
  }
};