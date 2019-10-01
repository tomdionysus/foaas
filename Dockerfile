FROM node:10-alpine

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application source
COPY . .

EXPOSE 5000

# Switch to a non-root user
USER node

CMD [ "node", "lib/server.js" ]
