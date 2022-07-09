module.exports = {
    name: 'Slime',
    url: '/slime/:name/:from',
    fields: [
      { name: 'Name', field: 'name' },
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/slime/:name/:from', function (req, res) {
        const message = `${req.params.name}is a piteously execrable nose picker and a frightful chromosome deficient odious leach-covered blob of quivering slime.`
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  