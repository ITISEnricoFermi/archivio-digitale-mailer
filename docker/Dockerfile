FROM node:11.9.0-alpine as base

WORKDIR /tmp
COPY package.json /tmp/package.json
RUN apk add git && yarn && mkdir -p /usr/app/node_modules && cp -a ./node_modules /usr/app/

FROM node:11.9.0-alpine
WORKDIR /usr/app
RUN apk add bash
COPY --from=base /usr/app/node_modules node_modules
COPY . .
ENV API_PORT=80
EXPOSE 80
CMD ["./docker/startup.sh"]

