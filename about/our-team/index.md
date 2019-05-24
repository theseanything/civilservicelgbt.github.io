---
layout: page
title: Our team
excerpt: 'We are a volunteer-led network, made up of members from across the UK.'
permalink: /about/our-team/
published: true
---

The **Civil Service LGBT+ Network** is led by a small team of volunteers. These volunteers give up their spare time to support LGBT+ civil servants.

## Leadership team

{% for volunteer in site.data.team %}{% if volunteer.Team == "Leadership" %}
| {% if volunteer.Position %}{% if volunteer.Link %}[**{{ volunteer.Position }}**]({{ site.url | append: site.baseurl | append: volunteer.Link }}){% else %}**{{ volunteer.Position }}**{% endif %}{% endif %} | {% if volunteer.Email %}[{{ volunteer.Name }}]({{ volunteer.Email }}){% else %}{{ volunteer.Name }}{% endif %} |{% endif %}{% endfor %}

## Communications team

{% for volunteer in site.data.team %}{% if volunteer.Team == "Communications" %}
| {% if volunteer.Position %}{% if volunteer.Link %}[**{{ volunteer.Position }}**]({{ site.url | append: site.baseurl | append: volunteer.Link }}){% else %}**{{ volunteer.Position }}**{% endif %}{% endif %} | {% if volunteer.Email %}[{{ volunteer.Name }}]({{ volunteer.Email }}){% else %}{{ volunteer.Name }}{% endif %} |{% endif %}{% endfor %}

## Local organisers

Our local organisers help us deliver work in places near you. This includes our events, campaigns and social activities.

{% for volunteer in site.data.team %}{% if volunteer.Team == "Local organisers" %}
| {% if volunteer.Position %}{% if volunteer.Link %}[**{{ volunteer.Position }}**]({{ site.url | append: site.baseurl | append: volunteer.Link }}){% else %}**{{ volunteer.Position }}**{% endif %}{% endif %} | {% if volunteer.Email %}[{{ volunteer.Name }}]({{ volunteer.Email }}){% else %}{{ volunteer.Name }}{% endif %} |{% endif %}{% endfor %}

## Project teams

Our project leads help us to deliver the activities in our business plan. If you want to get involved, [send us an email](mailto:info@civilservice.lgbt).

{% for volunteer in site.data.team %}{% if volunteer.Team == "Projects" %}
| {% if volunteer.Position %}{% if volunteer.Link %}[**{{ volunteer.Position }}**]({{ site.url | append: site.baseurl | append: volunteer.Link }}){% else %}**{{ volunteer.Position }}**{% endif %}{% endif %} | {% if volunteer.Email %}[{{ volunteer.Name }}]({{ volunteer.Email }}){% else %}{{ volunteer.Name }}{% endif %} |{% endif %}{% endfor %}
