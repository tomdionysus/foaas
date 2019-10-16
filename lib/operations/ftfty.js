module.exports = {
  name: "Fuck That, Fuck You",
  url: '/ftfy/:from',
  fields: [
    { name: 'From', field: 'from'}
  ],

  register(app, output) {
    return app.get('/ftfy/:from', function(req, res) {
      const message = 'Fuck That, Fuck You';
      const subtitle = `- ${req.params.from}`;
      return output(req, res, message, subtitle);
    });
  }
};
