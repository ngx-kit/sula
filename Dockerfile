FROM nginx:latest

MAINTAINER Sasha Novyk <alex@nvx.me>

COPY ./etc/nginx.conf /etc/nginx/nginx.conf

ADD ./dist/ui-docs /var/app/
