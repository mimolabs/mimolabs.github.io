---
layout: blog-post
title: Installing the MIMO Community Edition on Digital Ocean
date: 2018-06-14
categories: blog
published: true
permalink: /blog/install-mimo-digital-ocean.html
keywords: mimo open source, mimo digital ocean, splash pages digital ocean, unifi on digital ocean
description: Learn how to install MIMO on Digital Ocean.
---

<div class="">
  <img style="border-radius:4px;" src='/images/posts/mimo-digital-ocean.png'>
</div>

# Instaling MIMO in less than 30 minutes

The brand-new MIMO Community Edition is here. MIMO is opensource, free to use and has everything you need to offer guest WiFi access.

Here's how you can get your very own guest access / WiFi hotspot service / splash page / email capture tool / social logins up and running in less than 30 minutes.

## Step 1 - Create a Digital Ocean Server

If you don't have an account already, use [this](https://m.do.co/c/8504487cbb3a) link to get $10 worth of credits.

Create a server with **2GB** RAM. It'll cost you $10 per month. You can try with less RAM but it's not recommended.

Use Ubuntu 16.04 and select the NYC region. You can use another region but the NYC one seems fastest!

<div class="blog-image">
  <img src='/images/posts/digital-ocean-1.png'>
</div>

<div class="blog-image">
  <img src='/images/posts/digital-ocean-2.png'>
</div>

If you're into ssh keys, make sure you add your - it's easier and more secure than passwords.

Hit the create button and wait about 60 seconds.

## Setup Your DNS

You need a domain to use MIMO - we don't support accessing the service via IP address.

If you don't have one, go and buy one from someone like [namecheap](https://namecheap.pxf.io/c/1248558/386170/5618).

Get the IP address of your installation from the Digital Ocean portal and add some A-records. You'll need to add the following:

```
admin.your-domain
api.your-domain
dashboard.your-domain
splash.your-domain
```

These should all point at your IP address. They should also use your domain!

## Install MIMO

In case you get stuck, the full installation instructions are over <a href="https://github.com/mimolabs/mimo-docker" target="_blank" class="mimo-community">here</a>.

SSH to your server:

```
ssh root@ip-address
```

You should get logged straight in.

### Install Docker and Git

Run the following to install Docker on your server.

```
wget -qO- https://get.docker.com/ | sh
```

This installs Docker & Git on your machine. You may need to install Git manually.

### Install MIMO

Make sure you have your domain. You will also need your email server credentials for this installation.

If you don't enter valid email credentials, your installation will fail!!

```
sudo -s
mkdir /var/mimo
git clone https://github.com/mimolabs/mimo-docker.git /var/mimo
cd /var/mimo
./docker-install.sh
```

The installer will walk you through the setup - it takes about 5 minutes to run.

Once it's done, you should have a fully-functioning service running, fully protected with Let's Encrypt SSL certificates!

### Finish Up

An email will have been sent to you with the final setup instructions. It should take you to a page that looks like this!

<div class="blog-image flat-card">
  <img src='/images/posts/mimo-wizard.png'>
</div>

That's it, you're done. Login to your dashboard, add an integration and off you go! Get designing your splash pages.

<hr>

Click below to get started with your own MIMO Community Edition

<a href="https://github.com/mimolabs/mimo-ce" target="_blank" class="button mimo-community">MIMO COMMUNITY EDITION</a>

Let us know how we're doing on <a href='https://twitter/ohmimo'>twitter.com/ohmimo</a>

<div style="text-align: center">
<h1>Get Early Access</h1>
<link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
</style>
<div id="mc_embed_signup">
<form action="https://oh-mimo.us18.list-manage.com/subscribe/post?u=70a5f798d1af96e860c5dfd4f&amp;id=1ef2aee276" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
<div id="mc_embed_signup_scroll">
<label for="mce-EMAIL">Join the MIMO Community for early access to new features</label>
<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_70a5f798d1af96e860c5dfd4f_1ef2aee276" tabindex="-1" value=""></div>
<div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
</div>
</form>
</div>
</div>

