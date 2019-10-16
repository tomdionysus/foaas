# Is Trump Still President?

1.1.1

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

API clients are available in a number of languages:

| Language | Name           | Info                                           |
|:---------|:---------------|:-----------------------------------------------|
| JS/Node  | `foaas-client` | https://www.npmjs.org/package/foaas-client     |
| Ruby     | `foaas-client` | https://github.com/petedmarsh/foaas-client     |
| PHP      | `foaas-php`    | https://github.com/klaude/foaas-php            |
| Python   | `foaas-python` | https://github.com/dmpayton/foaas-python       |
| R        | `rfoaas`       | https://github.com/eddelbuettel/rfoaas         |
| CLI/bash | `foaas.sh`     | https://github.com/RaymiiOrg/foaas.sh          |
| .NET     | `FOAASClient`  | https://github.com/igorkulman/FOAASClient      |
| Java     | `JFOAAS`       | https://github.com/AnUnknownMiner/FOAAS-Java   |
| Go       | `go-fuck-off`  | https://godoc.org/github.com/ds0nt/go-fuck-off |
| Erlang   | `foaas-erlang` | https://github.com/rikribbers/foaas-erlang     |


| Platform/Software     | Name                                                                         |
|:----------------------|:-----------------------------------------------------------------------------|
| Hubot				    | https://github.com/github/hubot-scripts/blob/master/src/scripts/FOAAS.coffee |
| Thunderbird/Seamonkey | https://addons.mozilla.org/en-US/seamonkey/addon/qfo-quick-fuck-off          |
| TelegramBot           | https://github.com/rajanand02/TelegramFoaasBot                               |
| Slack                 | https://github.com/revmischa/foaas-slack                                     |
| Amazon Echo           | https://github.com/martinschaef/foaas-alex                                   |

# Contributing

## Adding new operations

To add a new istrumpstillpresident operation:

1. Fork into your account
2. Branch into a feature branch `feature/your_operation`
3. See the operation files in `/lib/itsp_operations`.
4. Add specs, using `/spec/operations` as examples. We won't be merging operations without working specs.
5. Push to your fork and submit a PR.

All contributions are very welcome.

## TODO

1. Update for Muslim Ban II
2. Update for Russia Ivestigation
3. Added Impeachement
