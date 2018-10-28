---
layout: news
author: Civil Service LGBT+ Network
date: '2018-10-29'
preview: true
published: true
title: It’s Civil Service Allies Week
excerpt: "This week, we’re celebrating the allies making the Civil Service a great place to work for LGBT+ people."
permalink: /2018/10/29/its-allies-week
redirect-from: /allies-week
image: /assets/images/posts/allies-week-no-date.png
image-alt: Civil Service Allies Week
categories:
- alliesweek18
---

This week is Civil Service Allies Week. From 29 October to 2 November, we'll be recognising the important role of allies in making our workplaces more diverse and inclusive.

As LGBT+ people, we are in a very small minority. That's also true in the Civil Service. Based on responses to the Civil Service People Survey, we estimate up to 20,000 civil servants are lesbian, gay, bisexual or 'other'[^1]. We see and hear about LGBT+ civil servants doing fantastic work to make things better for people like them at work every day, but we also know that they couldn't do all of that without support from people who don't identify as LGBT+. 

So we've set up Allies week, to thank those doing their part and to encourage more colleagues to step up and be active allies in their organisations.

<ul class="loop">
{% for post in site.categories.alliesweek18 %}
	<li>
		<article>
			<h2><a href="{{ site.url | append: site.baseurl | append: post.url }}" title="Read {{ post.title }}">{{ post.title }}</a></h2>
			<p>{{ post.excerpt }}</p>
			<p class="post-metadata">Published <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date  | date:'%-d %B %Y' }}</time> {% if post.author %}by {{ post.author }}{% endif %}</p>
		</article>
	</li>
{% endfor %}
</ul>

[^1]: The People Survey included gender identity monitoring for the first time in 2017, but as this was an experimental question it doesn't provide a good basis to make a wider estimate at the moment.