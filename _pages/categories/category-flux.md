---
title: "디자인 패턴 관련"
layout: archive
permalink: categories/design
author_profile: true
sidebar_main: true
---

{% assign posts = site.categories.design %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}
