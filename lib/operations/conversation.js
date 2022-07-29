module.exports = {
    name: 'Conversation',
    url: '/conversation/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/conversation/:from', function (req, res) {
        const message = 'More of your conversation would infect my brain.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  