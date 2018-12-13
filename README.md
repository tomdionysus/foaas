# FOAAS

2.0.0

[![Build Status](https://travis-ci.org/tomdionysus/foaas.svg?branch=master)](https://travis-ci.org/tomdionysus/foaas)

FOAAS (Fuck Off As A Service) provides a modern, RESTful, scalable solution to the common problem of telling people to fuck off.

Please see http://foaas.com for API documentation and examples.

# Installation

	npm install

# Run

	npm start

# Test

	npm test

# Clients

API clients are available in a number of languages:

| Language | Name           | Info                                           |
|:---------|:---------------|:-----------------------------------------------|
| JS/Node  | `foaas-client` | https://www.npmjs.org/package/foaas-client     |
| Ruby     | `foaas-client` | https://github.com/petedmarsh/foaas-client     |
| PHP      | `foaas-php`    | https://github.com/klaude/foaas-php            |
| Python   | `foaas-python` | https://github.com/dmpayton/foaas-python       |
| R        | `rfoaas`       | https://github.com/eddelbuettel/rfoaas         |
| CLI/bash | `foaas.sh`     | https://github.com/RaymiiOrg/foaas.sh          |
| CLI      | `foass-cli`    | https://github.com/palash25/foaas-cli          |
| .NET     | `FOAASClient`  | https://github.com/igorkulman/FOAASClient      |
| Java     | `JFOAAS`       | https://github.com/SSederberg/FOAAS-Java       |
| Go       | `go-fuck-off`  | https://godoc.org/github.com/ds0nt/go-fuck-off |
| Erlang   | `foaas-erlang` | https://github.com/rikribbers/foaas-erlang     |
| Crystal  | `foaas_client` | https://github.com/mamantoha/foaas_client      |

# Framework Support

| Framework     | Info                                                                         |
|:--------------------------------------------|:-----------------------------------------------------------------------------|
| [Polymer](https://www.polymer-project.org/) | https://github.com/benfonty/fooas-element                                    |

# Integrate FOAAS

| Platform/Software     | Name                                                                         |
|:--------------------------------------------|:-----------------------------------------------------------------------------|
| Thunderbird/Seamonkey                       | https://addons.mozilla.org/en-US/seamonkey/addon/qfo-quick-fuck-off          |
| TelegramBot                                 | https://github.com/rajanand02/TelegramFoaasBot                               |
| Slack                                       | https://github.com/revmischa/foaas-slack                                     |
| Amazon Echo                                 | https://www.amazon.com/dp/B01LZLFTMQ/ (source available [here](https://github.com/martinschaef/foaas-alex))|
| Twitter bot                                 | https://github.com/chris104957/GoFuckYourselfBot/tree/master                 |

# Contributing

## Adding new operations

To add a new FOAAS operation:

1. Fork into your account
2. Branch into a feature branch `feature/your_operation`
3. See the operation files in `/lib/operations`.
4. Add specs, using `/spec/operations` as examples. We won't be merging operations without working specs.
5. Push to your fork and submit a PR.

All contributions are very welcome.
