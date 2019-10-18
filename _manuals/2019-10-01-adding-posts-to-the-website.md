---
title:  				"Posting new content to the website"
excerpt:	  			"This guidance explains how to add posts, events, and resources to the Civil Service LGBT+ Network website."
categories: 			volunteers
layout: 				manual
slug:					/posting-content
published:				true
preview:				false
---

<!-- Include the following to generate a Table of Contents -->
* Table of contents will generate here
{:toc}
<!-- Don't touch the Table of Contents above -->

<!-- Include this line to process the Markdown and format the content properly -->
<div id="page-content" markdown="1">
<!-- Don't remove the line of code above -->

## About this guidance

This guidance explains how to publish content to the Civil Service LGBT+ Network website. You should follow this guidance if you want to publish:

- news posts
- event listings
- publications
- consultation landing pages
- volunteer manuals

It does not explain how to publish changes to the layouts or other generic page content. To update this, you will need to edit the source code of the site.

### Github

The site is hosted on [Github](https://github.com), using a system called [Github Pages](https://page.github.com) and [Jekyll](jekyllrb.com). 

You can add or edit content either using the Github website, or (for advanced users) by cloning this directory and pushing changes back to the Github repository. This guidance will not explain how to use Github in detail.

## Where to put files

### Folder structure

The website is structured around a series of ‘Collections’[^1]. Each Collection is a represented by a folder. You place Markdown files (which end with a `.md` or `.markdown` file extension) into each folder, and the website generates webpages from these files.

The Collections folders are:

- `_posts`: this is where news articles go
- `_events`: for event listings
- `_publications`: for documents and resources
- `_consultations`: to create consultation landing pages which link out to surveys or provide other engagement information
- `_manuals`: where guidance for volunteers goes

The Github repository also contains a `_templates` folder which includes boilerplate Markdown files that are designed for use in each of the above Collections folders.

Any images you need to include in posts should be stored in the `assets/images` folder.

Any documents like Word Documents, PDFs or other office files should be stored in the `assets/documents` folder.

## File names

### For event listings

For any files in `_posts`, `_publications`, `_consultations` and  `_manuals` your file name should be in the following format:

```
YYYYMMDD-name-of-event.md
```

You *should* include the date at the start of the file name, So you can keep track of them, but **do not** include the hyphen between the year, month and date. If you do this then the file will not generate properly.

### For all other post formats

For any files in `_posts`, `_publications`, `_consultations` and  `_manuals` your file name should be in the following format:

```
YYYY-MM-DD-name-of-file.md
```

Unlike with events, you **must** include the date at the start of the file name, *including the hyphens between the year, month and date. If you don’t then the file will not generate.

Dates *must* be for today or in the past. Dates in the future will not display on the website.

## Metadata

Each Markdown file must start with a set of `metadata` in order to display properly on the website. The metadata must be at the very start of the file. It looks like this:

```
---
title: "The title of the post"
excerpt: "A short description of the site"
slug: /2019/08/05/the-name-of-the-post
published: true
preview: true
---
```

The metadata you need for each type of post is included in the templates in the `_templates` folder of the repository. 

The metadata is explained for each post type below.

### News posts (_posts)

**title**: The name of the post, wrapped in straight double-quotes. Be careful to avoid using speech marks in titles, unless they are 'smart quotes', as this can break the formatting of posts.

**excerpt**: A short description of the post, up to 160 characters, wrapped in straight double-quotes. Be careful to avoid using speech marks in titles, unless they are 'smart quotes', as this can break the formatting of posts.

**author**: The name of the author or authors of the post, wrapped in straight double quotes.

**image**: (*Optional*) If you want to include an image at the very top of the article, you can include it here. Upload images to `/assets/images/posts/` and put the full name of the file here in the format `/assets/images/posts/name-of-file.fileformat`. Note that images are *always* 100% of the column width, so you should aim to use photos with a minimum of a 2:1 aspect ratio (i.e. landscape orientation).

**video**: (*Optional*) If you want to include a YouTube video, past the URL of the video here to embed it. URLs are usually in the format `https://www.youtube.com/embed/UNIQUE-VIDEO-REFERENCE`

**layout**: This determines the design of the page layout. For files in `_posts` this should usually be `news`. 

**permalink**: This is the preferred end of the URL after `www.civilservice.lgbt`. Usually, this is in the format `/YYYY/MM/DD/name-of-post/`. Note that this is case-sensitive.

**redirect_from**: (*Optional*) If you change the permalink, include the old permalink here. You can include multiple permalinks by starting a new line, starting with a dash and space.

**redirect_to**: (*Optional*) If you want to redirect to an external site, include the URL here. Only one URL is supported at once.

**published**: (*Optional*) Set to `true` or `false` to display the post on the website publicly.

**preview**: (*Optional*) Set to `true` or `false` to publish the post privately. This means it will be accessible at the direct URL but will not show up in the main site feeds.

### Events (_events)

Most fields supported by `_posts` files are also supported by `_events`. In addition, you must include:

**layout**: This determines the design of the page layout. For files in `_posts` this should usually be `event`. 

**event-date**: The date and time the event will take place. This should be in the format `YYYY-MM-DD HH:MM:SS`. Do not surround the date in quotes.

**registration-close-date**: (*Optional*) The date and time the registrations will close for this event. This should be in the format `YYYY-MM-DD HH:MM:SS`. Do not surround the date in quotes.

**location**: Include the venue location information here, wrapped in straight double quotes.

Each event **must** include at least one of the following:

1. **email**: an email address for more information or to register
2. **link**: a URL to an external registration form
3. **no-register**: if registration is not necessary, include a message of your choice here, wrapped in straight double quotes.

Events posts do not support images and videos at the start of the page.

### Publications (_publications)

Most fields supported by `_posts` files are also supported by `_publications`. In addition, you must include:

**layout**: This determines the design of the page layout. For files in `_publications` this should usually be `publication`. 

### Consultations (_consultations)

Most fields supported by `_posts` files are also supported by `_consultations`. In addition, you must include:

**layout**: This determines the design of the page layout. For files in `_consultations` this should usually be `consultation`.

**end-date**: Include the date and time the consultation closes In the format `YYYY-MM-DD HH:MM:SS`.

**consultation-link**: Include the URL to the consultation form or survey here.

### Volunteer manuals (_manuals)

Most fields supported by `_posts` files are also supported by `_manuals`. In addition, you must include:

**layout**: This determines the design of the page layout. For files in `_manuals` this should usually be `manual`. 

**slug**: This is the preferred end of the URL after `www.civilservice.lgbt`. Usually, this is in the format `/name-of-post/`. Note that this is case-sensitive. When published, the post will be at URL `www.civilservice.lgbt/manual/YOUR-CHOSEN-SLUG`.

## Post content

All post content must be written in Markdown. Markdown is a plain text format that turns characters such as `*` and `-` into formatted text. For example, wrapping a phrase with double asterisks (e.g. `**hello world**`) will make text bold.

This guidance does not cover the details of Markdown — there are many useful guides on the web. 

> [View a quick reference cheat sheet on Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### Special content for certain post types.

Some post layouts require additional HTML mark up to be included in order to display a table of contents on the page. 

The templates in `_templates` already contain the necessary code. Include your post content in the appropriate place, and do not edit the wrap around code or the formatting of posts will break.

## Forcing the site to regenerate

The website is a 'static' website, meaning that the content only updates when it is rebuilt because the content of a page has changed. In order to trigger a refresh you will need to 'push' a new or updated page to the website.

If you need to force a refresh, the easiest way to do this is just to add the date and time to the README file in the root of the repository and save the document.

Note that rebuilding the site can take several minutes, and any errors found in the site will need to be fixed before a rebuild takes place.

[^1]: ‘Collections’ is a term used in the Jekyll guidance to describe a folder containing related content that needs to be processed in certain ways when the website is built. Refer to the Jekyll guidance for more information.

<!-- Include this line to process the Markdown and format the content properly -->
</div>
<!-- Don't remove the line of code above -->
