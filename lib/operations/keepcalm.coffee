module.exports =
	name: "Keep Calm"
	url: '/keepcalm/:reaction/:from'
	fields: [
		{ name: 'Reaction', field: 'reaction'}
		{ name: 'From', field: 'from'}
	]

	register: (app, output) ->
		app.get '/keepcalm/:reaction/:from', (req, res) ->
			message = "Keep the fuck calm and #{req.params.reaction}!"
			subtitle = "- #{req.params.from}"
			output(req, res, message, subtitle)