module.exports =
  name: 'Text'
  mime: 'text/plain'

  render: (res, message, subtitle) ->
    res.set 'Content-Type', 'text/plain'
    res.send "#{message} #{subtitle}"