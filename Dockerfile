FROM node:11.9.0-alpine

ENV PORT=3000

WORKDIR /tmp
COPY package.json /tmp/package.json
RUN apk add git && yarn && mkdir -p /usr/app/node_modules && cp -a ./node_modules /usr/app/

WORKDIR /usr/app
COPY . .
CMD [ "node", "server/server.js"]
