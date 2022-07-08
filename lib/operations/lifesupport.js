module.exports = {
    name: 'Lifesupport',
    url: '/lifesupport/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/lifesupport/:from', function (req, res) {
        const message = 'Not saying I hate you, but I would unplug your life support to charge my phone.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  