module.exports = {
    name: 'Superpowers',
    url: '/superpowers/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/superpowers/:from', function (req, res) {
        const message = 'I wish I had superpowers, then I could make you disappear.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }