---
title: "CSR 과 SSR 의 차이"
layout: archive
permalink: categories/render
author_profile: true
sidebar_main: true
---

{% assign posts = site.categories.render %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}
