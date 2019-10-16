// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
module.exports = {
  name: "Version",
  url: '/version',
  fields: [],

  register(app, output, version) {
    return app.get('/version', function(req, res) {
      const message = `Version ${version}`;
      const subtitle = "ITSPAAS";
      return output(req, res, message, subtitle);
    });
  }
};
