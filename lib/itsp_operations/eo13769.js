// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
module.exports = {
  name: "Executive Order 13769",
  url: '/eo13769',

  register(app, output) {
    return app.get('/eo13769', function(req, res) {
      const message = "At this time, Executive Order 13769 (AKA the Muslim Ban) has been put on hold by the Ninth Circuit Court. Victory!";
      const subtitle = "The vote was 3-0 against Donald Trump";
      return output(req, res, message, subtitle);
    });
  }
};
