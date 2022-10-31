FROM node:18.8.0

ENV NODE_ENV=production
WORKDIR /app

RUN mkdir -p /app/bin
RUN mkdir -p /app/public
RUN mkdir -p /app/routes
RUN mkdir -p /app/views

COPY /blue-green/bin /app/bin
COPY /blue-green/public /app/public
COPY /blue-green/routes /app/routes
COPY /blue-green/views /app/views

COPY ["blue-green/app.js", "blue-green/package.json", "blue-green/package-lock.json*", "./"]

RUN npm install  # --production

EXPOSE 3000
ENTRYPOINT [ "node", "bin/www" ]
