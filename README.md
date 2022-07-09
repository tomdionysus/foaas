# PFOaaS

*July 2022 - v0.0.9*

# [![Build Status](https://travis-ci.org/tomdionysus/foaas.svg?branch=master)](https://travis-ci.org/tomdionysus/foaas) [![Coverage #Status](https://coveralls.io/repos/github/tomdionysus/foaas/badge.svg?branch=master)](https://coveralls.io/github/tomdionysus/foaas?#branch=master)
# [![Coverage Status](https://coveralls.io/repos/github/tomdionysus/foaas/badge.svg?branch=master)](https://coveralls.io/github/tomdionysus/foaas?branch=master)
# [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

PFOaaS (Polite Fork Off As A Service) provides a modern, RESTful, scalable solution to the common problem of telling people to fork off.

Please see https://pfoaas.desigeek.com for API documentation and examples.

# Example use
Follwing is an example on how to call the REST API and expecting a text output.

curl -H 'Accept: text/plain' https://pfoaas.desigeek.com/row/Amit 
![image](https://user-images.githubusercontent.com/3529468/178124475-2a3f5fc8-9c33-492f-a49c-de58ebbbf752.png)

If json is your thing, then you can use the following, which will get you the result as a json object.
curl -H 'Accept: application/json' https://pfoaas.desigeek.com/row/Amit 
![image](https://user-images.githubusercontent.com/3529468/178124533-e3ea9e9d-bf28-47ce-84a2-4f46befd6e28.png)

PFOaaS will respond to the following 'Accept:' values with appropriate content
* text/plain - Content will be returned as a plain string.
* application/json - Content will be returned as a JSON object { message: 'message', subtitle: 'subtitle' }
** Supports jsonp by including ?callback=?
* text/html - Content will be returned as an HTML page with a twitter bootstrap hero unit, containing the message and the subtitle.
* application/xml - Content will be returned as a XML document.

# Docker

	docker build -t foaas:1 .
    docker run -v $(pwd):/usr/src/app -p 5000:5000 foaas:1

# Clients

API clients are available in a number of languages:

| Language | Name           | Info                                           |
|:---------|:---------------|:-----------------------------------------------|
| JS/Node  | `foaas-client` | https://www.npmjs.org/package/foaas-client     |
| Ruby     | `foaas-client` | https://github.com/petedmarsh/foaas-client     |
| PHP      | `foaas-php`    | https://github.com/klaude/foaas-php            |
| Python   | `foaas-python` | https://github.com/dmpayton/foaas-python       |
| Python   | `foaap`        | https://github.com/ilhomidin/foaap             |
| R        | `rfoaas`       | https://github.com/eddelbuettel/rfoaas         |
| CLI/bash | `foaas.sh`     | https://github.com/RaymiiOrg/foaas.sh          |
| CLI      | `foass-cli`    | https://github.com/palash25/foaas-cli          |
| .NET     | `FOAASClient`  | https://github.com/igorkulman/FOAASClient      |
| .NET Core| `foaas-dotnet` | https://github.com/Zuev-Alexander/foaas-dotnet |
| Java     | `JFOAAS`       | https://github.com/SSederberg/FOAAS-Java       |
| Go       | `go-fuck-off`  | https://godoc.org/github.com/ds0nt/go-fuck-off |
| Erlang   | `foaas-erlang` | https://github.com/rikribbers/foaas-erlang     |
| Crystal  | `foaas_client` | https://github.com/mamantoha/foaas_client      |
| Rust     | `foaas-rs`     | https://github.com/jilsahm/foaas-rs            |

# GUI Clients

| Platform          | Info                                                    |
|:------------------|:--------------------------------------------------------|
| Web               | https://github.com/hamza1311/fuck-off                   |


# Framework Support

| Framework     | Info                                                                         |
|:--------------------------------------------|:-----------------------------------------------------------------------------|
| [Polymer](https://www.polymer-project.org/) | https://github.com/benfonty/fooas-element                                    |
| [React](https://reactjs.org/) | https://github.com/circa10a/react-foaas-card                                   	     |

# Integrate FOAAS

| Platform/Software     | Name                                                                         |
|:--------------------------------------------|:-----------------------------------------------------------------------------|
| Thunderbird/Seamonkey                       | https://addons.mozilla.org/en-US/seamonkey/addon/qfo-quick-fuck-off          |
| TelegramBot                                 | https://github.com/rajanand02/TelegramFoaasBot                               |
| Slack                                       | https://github.com/revmischa/foaas-slack                                     |
| Amazon Echo                                 | https://www.amazon.com/dp/B01LZLFTMQ/ (source available [here](https://github.com/martinschaef/foaas-alex))|
| Terraform Provider                          | https://github.com/m13t/terraform-provider-foac                              |

# Contributing

## Adding new operations

To add a new FOAAS operation:

1. Fork into your account
2. Branch into a feature branch `feature/your_operation`
3. See the operation files in `/lib/operations`.
4. Add specs, using `/spec/operations` as examples. We won't be merging operations without working specs.
5. Push to your fork and submit a PR.

All contributions are very welcome.
