FROM ubuntu:14.04

RUN apt-get update -y && \
    apt-get upgrade -y && \
    apt-get install -y curl

# install nodejs + npm.  (source: https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server)
RUN curl -sL https://deb.nodesource.com/setup | bash - 

RUN apt-get update -y && \
    apt-get install -y nodejs build-essential libssl-dev

COPY . /opt/foaas

WORKDIR /opt/foaas

RUN npm install

EXPOSE 5000

CMD ["/usr/bin/npm", "start"]
