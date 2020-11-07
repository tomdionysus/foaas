// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
module.exports = {
  name: "Only so much left",
  url: '/daysleft',

  register(app, output) {
    var nowish = new Date();
    var innaug = new Date("01/20/2021");
    var daysLeft = Math.floor((Date.UTC(innaug.getFullYear(), innaug.getMonth(), innaug.getDate()) - Date.UTC(nowish.getFullYear(), nowish.getMonth(), nowish.getDate()) ) /(1000 * 60 * 60 * 24));
    return app.get('/daysleft', function(req, res) {
      const message = `There are ${daysLeft} days left in the Trump Presidency.`;
      const subtitle = "It can't come soon enough";
      return output(req, res, message, subtitle);
    });
  }
};
