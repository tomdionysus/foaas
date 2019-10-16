module.exports = {
    name: "Waste",
    url: '/waste/:name/:from',
    fields: [
        { name: 'Name', field: 'name'},
        { from: 'From', field: 'from'}
    ],

    register(app, output) {
        return app.get('/waste/:name/:from', function(req, res) {
            const message = `I don't waste my fucking time with your bullshit ${req.params.name}!`;
            const subtitle = `- ${req.params.from}`;
            return output(req, res, message, subtitle);
        });
    }
};