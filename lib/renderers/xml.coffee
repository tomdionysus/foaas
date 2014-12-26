escapeXML = (s) ->
  s.replace(/([&<>'"])/g, (c) ->
    '&' + { '&': 'amp', '<': 'lt', '>': 'gt', "'": 'apos', '"': 'quot'}[c] + ';'
  )

module.exports =
  name: 'XML'
  mime: 'application/xml'

  render: (res, message, subtitle) -> 
    res.set 'Content-Type', 'application/xml'
    res.send '<?xml version="1.0" encoding="UTF-8"?>
<foaas:response xmlns:foaas="http://foaas.com/fuckoff">
  <foaas:message>'+escapeXML(message)+'</foaas:message>
  <foaas:subtitle>'+escapeXML(subtitle)+'</foaas:subtitle>
</foaas:response>'