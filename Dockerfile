FROM node:latest as build 

WORKDIR /build

COPY ./package.json .
RUN npm install

COPY . .
RUN npm run build
FROM nginx:latest

COPY --from=build /build/build/. /usr/share/nginx/html
COPY --from=build /build/nginx/nginx.conf /etc/nginx/conf.d/default.conf

