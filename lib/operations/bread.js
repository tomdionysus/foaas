module.exports = {
    name: 'Bread',
    url: '/bread/:name/:from',
    fields: [
      { name: 'Name', field: 'name' },
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/bread/:name/:from', function (req, res) {
        const message = `You’re like the end pieces of a loaf of bread, ${req.params.name}; everyone touches you, but nobody wants you. `
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  