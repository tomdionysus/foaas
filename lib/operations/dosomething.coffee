module.exports =
	name: "Do Something"
	url: '/dosomething/:do/:something/:from'
	fields: [
		{ name: 'Do', field: 'do'}
		{ name: 'Something', field: 'something'}
		{ name: 'From', field: 'from'}
	]

	register: (app, output) ->
		app.get '/dosomething/:do/:something/:from', (req, res) ->
			message = "#{req.params.do} the fucking #{req.params.something}!"
			subtitle = "- #{req.params.from}"
			output(req, res, message, subtitle)