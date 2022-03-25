FROM node:latest

LABEL author="klajdikumes"

ENV NODE_ENV=development
ENV PORT=3000

COPY . /var/www
WORKDIR /var/www

VOLUME [ "/var/www", "/logs" ]

RUN   npm install

EXPOSE 3000

ENTRYPOINT [ "npm ", "start" ]