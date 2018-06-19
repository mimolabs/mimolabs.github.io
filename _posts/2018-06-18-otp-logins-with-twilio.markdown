---
layout: blog-post
title: Setting up an OTP splash page with Twilio
date: 2018-06-17
categories: blog
published: true
permalink: /blog/otp-splash-twilio.html
keywords: mimo open source, mimo digital ocean, splash pages otp, splash pages twilio, otp splash pages, sms logins
description: Learn how to setup an OTP splash page with Twilio and UniFi
---

<div class="">
  <img style="border-radius:4px;" src='/images/posts/mimo-twilio.png'>
</div>

# Offering OTP / SMS Logins with MIMO

### OTP guest access in less than 2 minutes!

If you're using the open source version ([MIMO Community Edition](https://oh-mimo.com/community-edition/)), you can now offer OTP logins and use your own Twilio account. All you need is a functioning version of MIMO (and a Twilio account). To setup MIMO, follow the tutorial [here](https://oh-mimo.com/blog/install-mimo-digital-ocean.html) or [here](https://github.com/mimolabs/mimo-docker). It will take you less than 30 minutes to get things running. You can sign-up for a Twilio account [here](https://www.twilio.com/try-twilio).

We'll assume you have your MIMO dashboard working as well as a functioning integration (UniFi works well).

## Step 1 - Get Your Twilio Credentials

Login to your Twilio dashboard and grab your Twilio credentials.

<div class="blog-image">
  <img src='/images/posts/twilio-2.png'>
</div>

<div class="blog-image">
  <img src='/images/posts/twilio-3.png'>
</div>

Make a note of the account SID and auth token.

## Step 2 - Create a Splash Page

Login to your MIMO dashboard and create a splash page if you haven't already done so.

Within the splash designer, enable SMS logins. You'll need your Twilio credentials that you got in step 1.

<div class="blog-image">
  <img src='/images/posts/twilio-1.png'>
</div>

Use the Twilio account ID in the Twilio username field. Use the Twilio auth token in the password field.

Hit save and reload your splash pages.

## Step 3 - Test Your Splash Pages

Once you've loaded the splash pages, you should see an SMS login option. Enter your mobile number in the field and hit submit. You should recieve a text message in a few seconds containing a password (OTP). Enter this on the page and you should get logged straight in!

<div class="blog-image flat-card">
  <img src='/images/posts/twilio-4.png'>
</div>

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

