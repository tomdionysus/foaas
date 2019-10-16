# Is Trump Still President?

1.1.2

[![Build Status](https://travis-ci.org/ksonney/istrumpstillpresident.io.svg?branch=istrumpstillpresident)](https://travis-ci.org/ksonney/istrumpstillpresident.io)


IsTrumpStillPresident.io provides a modern, RESTful, scalable solution to the common problem of checking to see if Donald Trump is still the US President.

This is a fork of the FOAAS project at https://foass.com

Please see http://istrumpstillpresident.io for API documentation and examples.

# Installation

	npm install

# Run

	npm start

# Test

	npm test

# Clients and Integrations

Any one of the following FOAAS Clients or integrations can be adapted for istrumstillpresident.io However, we have not done so. 

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
| [React](https://reactjs.org/) | https://github.com/circa10a/react-foaas-card                                   	     |


| Platform/Software     | Name                                                                         |
|:--------------------------------------------|:-----------------------------------------------------------------------------|
| Thunderbird/Seamonkey                       | https://addons.mozilla.org/en-US/seamonkey/addon/qfo-quick-fuck-off          |
| TelegramBot                                 | https://github.com/rajanand02/TelegramFoaasBot                               |
| Slack                                       | https://github.com/revmischa/foaas-slack                                     |
| Amazon Echo                                 | https://www.amazon.com/dp/B01LZLFTMQ/ (source available [here](https://github.com/martinschaef/foaas-alex))|
| Terraform Provider                          | https://github.com/m13t/terraform-provider-foac                              |

# Contributing

## Adding new operations

To add a new istrumpstillpresident operation:

1. Fork into your account
2. Branch into a feature branch `feature/your_operation`
3. See the operation files in `/lib/itsp_operations`.
4. Add specs, using `/spec/operations` as examples. We won't be merging operations without working specs.
5. Push to your fork and submit a PR.

All contributions are very welcome.
