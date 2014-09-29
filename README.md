# FOAAS

v0.0.2

FOAAS (Fuck Off As A Service) provides a modern, RESTful, scalable solution to the common problem of telling people to fuck off.

# Content Negotiation

FOAAS will respond to the following 'Accept:' values with appropriate content

* text/plain - Content will be returned as a plain string.
* application/json - Content will be returned as a JSON object { message: 'message', subtitle: 'subtitle' }
* text/html - Content will be returned as an HTML page with a twitter bootstrap hero unit, containing the message and the subtitle.
* application/xml - Content will be returned as an XML document.

# API

## /off/:name/:from

Will return content of the form 'Fuck off, :name. - :from', e.g. /off/Tom/Chris will return 'Fuck off, Tom - Chris'

## /you/:name/:from

Will return content of the form 'Fuck you, :name. - :from', e.g. /you/Tom/Chris will return 'Fuck you, Tom - Chris'

## /this/:from

Will return content of the form 'Fuck this. - :from', e.g. /this/Tom will return 'Fuck this. - Tom'

## /that/:from

Will return content of the form 'Fuck that. - :name', e.g. /that/Tom will return 'Fuck that. - Tom'

## /everything/:from

Will return content of the form 'Fuck everything. - :name', e.g. /everything/Tom will return 'Fuck everything. - Tom'

## /everyone/:from

Will return content of the form 'Everyone can go and fuck off. - :name', e.g. /everyone/Tom will return 'Everyone can go and fuck off. - Tom'

## /donut/:name/:from

Will return content of the form ':name, go and take a flying fuck at a rolling donut. - :from', e.g. /donut/Tom/Chris will return 'Tom, go and take a flying fuck at a rolling donut. - Chris'

## /shakespeare/:name/:from

Will return content of the form ':name, Thou clay-brained guts, thou knotty-pated fool, thou whoreson obscene greasy tallow-catch! - :from'.

## /linus/:name/:from

Will return content of the form ':name, there aren't enough swear-words in the English language, so now I'll have to call you perkeleen vittupää just to express my disgust and frustration with this crap. - :from'.

## /king/:name/:from

Will return content of the form 'Oh fuck off, just really fuck off you total dickface. Christ :name, you are fucking thick. - :from'.

## /pink/:from

Will return content of the form 'Well, Fuck me pink. - :name".

## /life/:from

Will return content of the form 'Fuck my life. - :from', e.g. /life/Phil will return 'Fuck my life. - Phil'.

## /chainsaw/:name/:from

Will return content of the form 'Fuck me gently with a chainsaw, :name. Do I look like Mother Teresa? - :from', e.g. /chainsaw/Chris/Heather will return 'Fuck me gently with a chainsaw, Chris. Do I look like Mother Teresa? - Heather'.

## /outside/:name/:from

Will return content of the form ':name, why don't you go outside and play hide-and-go-fuck-yourself? - :from', e.g. /outside/BigBrother/TheWorld will return 'BigBrother, why don't you go outside and play hide-and-go-fuck-yourself? - TheWorld'.

## /:thing/:from

Will return content of the form 'Fuck :thing. - :from', e.g. /pineapples/%E2%99%A5%20Chris will return 'Fuck pineapples. - ♥ Chris'.

## /thanks/:from

Will return content of the form 'Fuck you very much. - :from'.

## /flying/:from

Will return content of the form 'I don't give a flying fuck. - :from'.

## /fascinating/:from

Will return content of the form 'Fascinating story, in what chapter do you shut the fuck up? - :from'.

## /madison/:name/:from

Will return content of the form 'What you've just said is one of the most insanely idiotic things I have ever heard, :name. At no point in your rambling, incoherent response were you even close to anything that could be considered a rational thought. Everyone in this room is now dumber for having listened to it. I award you no points :name, and may God have mercy on your soul. -  :from'

## /cool/:from

Will return content of the form 'Cool story, Bro - :from'

## /field/:name/:from/:reference

Will return content of the form 'And :from said on to :name, "Verily, cast thine eyes upon the field in which I grow my fucks", and :name gave witness onto the field, and saw that it was barren. -  :reference'

# Alternative URLs

- http://foaas.herokuapp.com
- http://foaas.com

# Contributing

In your PR, please include relevant documentation in both README.md and public/index.html.

# Roadmap

FOASS will be extended to include the following functionality:

* Random fuck offs (or Fuck Off of the Day), without having to specify the operation (off, you, everyone, donut etc) explicitly
* Internationalization based on Accept-Language.

All contributions are very welcome.
