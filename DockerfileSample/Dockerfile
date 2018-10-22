
FROM node:5.2.0-wheezy

RUN mkdir -p /nodejs/app/

WORKDIR /nodejs/app/

COPY app.js .

ENV APP_PORT 8000

CMD node app.js
