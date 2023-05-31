FROM debian:stable-slim
WORKDIR /usr/Recipes-Website
ENV TZ="Europe/Berlin"

RUN apt install hugo

COPY . . 

CMD ["hugo", "server"]