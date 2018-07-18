module.exports = { 
    name: "Cookie",
    url: '/cookie/:from',
    fields: [
        { name: 'From', field: 'from'}
    ],
  
    register(app, output) {
      return app.get('/cookie/:from', function(req, res) {
        const message = "You deserved a cookie! Eat him! Now!";
        const subtitle = `- ${req.params.from}`;
        return output(req, res, message, subtitle);
      });
    }
  };