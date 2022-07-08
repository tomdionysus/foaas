module.exports = {
    name: 'Expectations',
    url: '/expectations/:name/:from',
    fields: [
      { name: 'Name', field: 'name' },
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/expectations/:name/:from', function (req, res) {
        const message = `${req.params.name}, you consistently set low expectations and fail to achieve them. `
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  