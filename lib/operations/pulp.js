// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
module.exports = {
  name: "Pulp",
  url: '/pulp/:language/:from',
  fields: [
    { name: 'Language', field: 'language'},
    { name: 'From', field: 'from'}
  ],

  register(app, output) {
    return app.get('/pulp/:language/:from', function(req, res) {
      const message = `${req.params.language}, motherfucker, do you speak it?`;
      const subtitle = `- ${req.params.from}`;
      return output(req, res, message, subtitle);
    });
  }
};

