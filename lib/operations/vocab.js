module.exports = {
    name: 'Vocab',
    url: '/vocab/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/vocab/:from', function (req, res) {
        const message = 'Ins\'t it rather dangerous to use one\'s entire vocabulary in a single sentence?'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  