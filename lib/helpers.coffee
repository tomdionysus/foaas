escapeXMLCharacter = (c) ->
	'&' + { '&': 'amp', '<': 'lt', '>': 'gt', "'": 'apos', '"': 'quot'}[c] + ';'

escapeXML = (s) ->
  s.replace(/([&<>'"])/g, escapeXMLCharacter)

module.exports.escapeXML = escapeXML