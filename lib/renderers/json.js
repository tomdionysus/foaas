// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
module.exports = {
  name: 'JSON',
  mime: 'application/json',

  render(req, res) {
  	return res.jsonp({ message: req.message, subtitle: req.subtitle });
}
};