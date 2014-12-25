escapeXMLCharacter = (c) ->
  '&' + { '&': 'amp', '<': 'lt', '>': 'gt', "'": 'apos', '"': 'quot'}[c] + ';'

escapeXML = (s) ->
  s.replace(/([&<>'"])/g, escapeXMLCharacter)

module.exports =
  VERSION: '0.0.5'
  escapeXML: escapeXML
