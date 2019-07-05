module.exports = {
    name: "Holygrail",
    url: '/holygrail/:noun/:from',
    fields: [
        { name: 'Noun', field: 'noun'},
        { name: 'From', field: 'from'}
    ],

    register(app, output) {
        return app.get('/holygrail/:noun/:from', function(req, res) {
            const message = `I don't want to talk to you, no more, you empty-headed animal, food trough wiper. I fart in your general direction. You mother was a hamster and your father smelt of elderberries. Now go away or I shall taunt you a second time.`;
            const subtitle = `- ${req.params.from}`;
            return output(req, res, message, subtitle);
        });
    }
};
