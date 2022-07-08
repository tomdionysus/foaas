module.exports = {
    name: 'Solitaire',
    url: '/solitaire/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/solitaire/:from', function (req, res) {
        const message = 'I would rather be playing Solitaire right now.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }