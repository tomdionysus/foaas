// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
module.exports = {
  name: "Ballmer",
  url: '/ballmer/:name/:company/:from',
  fields: [
    { name: 'Name', field: 'name'},
    { name: 'Company', field: 'company'},
    { name: 'From', field: 'from'}
  ],

  register(app, output) {
    return app.get('/ballmer/:name/:company/:from', function(req, res) {
      const message = `Fucking ${req.params.name} is a fucking pussy. I'm going to fucking bury that guy, I have done it before, and I will do it again. I'm going to fucking kill ${req.params.company}.`;
      const subtitle = `- ${req.params.from}`;
      return output(req, res, message, subtitle);
    });
  }
};