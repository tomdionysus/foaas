module.exports = {
  name: "Rat's Arse",
  url: '/ratsarse/:from',
  fields: [
    { name: 'From', field: 'from'}
  ],

  register(app, output) {
    return app.get('/ratsarse/:from', function(req, res) {
      const message = "I don't give a rat's arse.";
      const subtitle = `- ${req.params.from}`;
      return output(req, res, message, subtitle);
    });
  }
};
