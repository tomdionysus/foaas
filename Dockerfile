FROM node:10-alpine
WORKDIR /usr/src/app
COPY . .
EXPOSE 5000
CMD [ "node", "lib/server.js" ]