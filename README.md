# How to use this Project

1. You have to install the Hugo package: https://gohugo.io/
2. Clone this Repository
3. Add Posts/Recipes: `hugo new post/Naan.md`
4. Add meta info inside your Markdown file:
```
---
title: "Naan"
date: 2023-05-31T09:11:12+02:00
tags: ["Backen", "Brot"]
image : "/img/posts/naan.jpg"
Description  : "Naan ist ein aus Indien stammendes Brot."
---
```
5. Add an Image in `/themes/lightbi/static/img/posts` and don't forget to edit the file name in the meta info
6. After you added all your content use `hugo` to build the site
7. Now you can edit the Dockerfile and docker-compose.yml to fit your systems needs and run via `docker compose up -d`
