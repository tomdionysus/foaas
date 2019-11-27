module.exports = {
  name: "Even",
  url: '/even/:from',
  fields: [
    { name: 'From', field: 'from'}
  ],

  register(app, output) {
    return app.get('/even/:from', function(req, res) {
      const message = "I can't fuckin' even.";
      const subtitle = `- ${req.params.from}`;
      return output(req, res, message, subtitle);
    });
  }
};