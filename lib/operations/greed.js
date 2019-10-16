// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
module.exports = {
  name: "Greed",
  url: '/greed/:noun/:from',
  fields: [
    { name: 'Noun', field: 'noun'},
    { name: 'From', field: 'from'}
  ],

  register(app, output) {
    return app.get('/greed/:noun/:from', function(req, res) {
      const message = `The point is, ladies and gentleman, that ${req.params.noun.toLowerCase()} -- for lack of a better word -- is good. ${req.params.noun} is right. ${req.params.noun} works. ${req.params.noun} clarifies, cuts through, and captures the essence of the evolutionary spirit. ${req.params.noun}, in all of its forms -- ${req.params.noun} for life, for money, for love, knowledge -- has marked the upward surge of mankind.`;
      const subtitle = `- ${req.params.from}`;
      return output(req, res, message, subtitle);
    });
  }
};
