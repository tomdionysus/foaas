module.exports = {
  name: "Whatever",
  url: '/whatever/:from',
  fields: [
    { name: 'From', field: 'from'}
  ],

  register(app, output) {
    return app.get('/whatever/from', function(req, res) {
      const message = `Happy Fucking Whatever!`;
      const subtitle = `- ${req.params.from}`;
      return output(req, res, message, subtitle);
    });
  }
};
