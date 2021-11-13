module.exports = {
  name: "head start",
  url: "/headstart/:name/:from",
  fields: [
    { name: "Name", field: "name" },
    { name: "From", field: "from" },
  ],
  register(app, output) {
    return app.get("/headstart/:name/:from", function (req, res) {
      const message = `${req.params.name}, if you started fucking off now, you would have a head start`;
      const subtitle = `- ${req.params.from}`;
      return output(req, res, message, subtitle);
    });
  },
};
