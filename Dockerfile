FROM nginx

WORKDIR /usr/share/nginx/html

COPY . .

CMD [ "mkdocs", "serve" ]