module.exports =
  name: "Executive Order 13769"
  url: '/eo13769'

  register: (app, output) ->
    app.get '/eo13769', (req, res) ->
      message = "At this time, Executive Order 13769 (AKA the Muslim Ban) has been put on hold by the Ninth Circuit Court. Victory!"
      subtitle = "The vote was 3-0 against Donald Trump"
      output(req, res, message, subtitle)
