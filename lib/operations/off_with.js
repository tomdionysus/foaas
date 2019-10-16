// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const URL = "/off-with/:behavior/:from";
module.exports = {
  name: "Fuck Off With",
  url: URL,
  fields: [
    {name: 'Behavior', field: 'behavior'},
    {name: 'From', field: 'from'}
  ],

  register(app, output) {
    return app.get(URL, function(req, res) {
      const message = `Fuck off with ${req.params.behavior}`;
      const subtitle = `- ${req.params.from}`;
      return output(req, res, message, subtitle);
    });
  }
};
