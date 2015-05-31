module.exports =
  name: 'JSON'
  mime: 'application/json'

  render: (req, res) ->
  	res.jsonp { message: req.message, subtitle: req.subtitle }