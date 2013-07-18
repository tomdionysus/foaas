# FOAAS

v0.0.1

FOAAS (Fuck Off As A Service) provides a modern, RESTful, scalable solution to the common problem of telling people to fuck off.

# Content Negotiation

FOAAS will respond to the following 'Accept:' values with appropriate content

* text/plain - Content will be returned as a plain string.
* application/json - Content will be returned as a JSON object { message: 'message', subtitle: 'subtitle' }
* text/html - Content will be returned as an HTML page with a twitter bootstrap hero unit, containing the message and the subtitle.

# API

## /off/:name/:from

Will return content of the form 'Fuck off, :name. - :from', e.g. /off/Tom/Chris will return 'Fuck off, Tom - Chris'

## /you/:name/:from

Will return content of the form 'Fuck you, :name. - :from', e.g. /you/Tom/Chris will return 'Fuck you, Tom - Chris'

## /this/:from

Will return content of the form 'Fuck this. - :name', e.g. /this/Tom will return 'Fuck this. - Tom'

## /that/:from

Will return content of the form 'Fuck that. - :name', e.g. /that/Tom will return 'Fuck that. - Tom'

## /everything/:from

Will return content of the form 'Fuck everything. - :name', e.g. /everything/Tom will return 'Fuck everything. - Tom'

## /everyone/:from

Will return content of the form 'Everyone can go and fuck off. - :name', e.g. /everyone/Tom will return 'Everyone can go and fuck off. - Tom'

## /donut/:name/:from

Will return content of the form ':name, go and take a flying fuck at a rolling donut. - :from', e.g. /donut/Tom/Chris will return 'Tom, go and take a flying fuck at a rolling donut. - Chris'

## /linus/:name/:from

Will return content of the form ':name, there aren't enough swear-words in the English language, so now I'll have to call you perkeleen vittupää just to express my disgust and frustration with this crap. - :from'.

## /king/:name/:from

Will return content of the form 'Oh fuck off, just really fuck off you total dickface. Christ :name, you are fucking thick. - :from'.

## /pink/:from

Will return content of the form 'Well, Fuck me pink. - :name".

# Roadmap

FOASS will be extended to include the following functionality:

* Random fuck offs (or Fuck Off of the Day), without having to specify the operation (off, you, everyone, donut etc) explicitly
* Internationalization based on Accept-Language.

All contributions are very welcome.
