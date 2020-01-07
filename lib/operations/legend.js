
module.exports = {
  name: "Legend",
  url: '/legend/:name/:from',
  fields: [
    { name: 'Name', field: 'name'},
    { name: 'From', field: 'from'}
  ],

  register(app, output) {
    return app.get('/legend/:name/:from', function(req, res) {
      const message = `${req.params.name}, you're a fucking legend.`;
      const subtitle = `- ${req.params.from}`;
      return output(req, res, message, subtitle);
    });
  }
};