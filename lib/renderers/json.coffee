module.exports =
  name: 'JSON'
  mime: 'application/json'

  render: (res, message, subtitle) ->
  	res.jsonp { message: message, subtitle: subtitle }