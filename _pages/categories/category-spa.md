---
title: "Single Page Application"
layout: archive
permalink: categories/spa
author_profile: true
sidebar_main: true
---

{% assign posts = site.categories.spa %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}
