// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
module.exports = {
  name: 'Text',
  mime: 'text/plain',

  render(req, res) {
    res.set('Content-Type', 'text/plain');
    return res.send(`${req.message} ${req.subtitle}`);
  }
};