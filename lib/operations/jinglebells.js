module.exports = {
  name: "Jingle Bells",
  url: '/jinglebells/:from',
  fields: [
    { name: 'From', field: 'from'}
  ],

  register(app, output) {
    return app.get('/jinglebells/:from', function(req, res) {
      const message = 'Fuck you, fuck me, fuck your family. Fuck your father, fuck your mother, fuck you and me.';
      const subtitle = `- ${req.params.from}`;
      return output(req, res, message, subtitle);
    });
  }
};
