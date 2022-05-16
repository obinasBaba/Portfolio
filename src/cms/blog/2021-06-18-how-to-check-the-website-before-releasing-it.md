---
contentKey: blog
title: How To Check The Website Before Releasing It?
date: 2021-06-18T08:35:40.289Z
thumbnail: /img/screenshot-56-.png
tags:

- tag: "#css"
- tag: "#Js"
- tag: "#GSAP"
- tag: "#Angular"

---


You want to release a website but have doubt if everything is ready? Are you sure you remember to add any minor but
necessary details? We took control and find a way to remedy such bugs --- Halo Lab pre-release checklist. We hope you
will benefit from it, too.

Are you sure that your website can cope with it?
------------------------------------------------

You can find out what your website is able to cope with only with testing. The testing is required to know how properly
the product is working and whether it is easy-to-understand for users. QA engineers are responsible for development of
test scenarios and preparation and evaluation of test results, but they're not the only people who perform this.

### Design testing

Design testing is a check of layout for design compliance. A product designer is responsible for this. After a developer
has finished their work, a designer shall check if everything has proper appearance and shows appropriate behavior. If
there are any questions, a designer shall report a bug or decide with a developer on the need to redo something.

Typical problems that could be found during the design testing:

- incorrect spacings;
- missed states on interactive elements;
- bad animation timing or easing.

### Functional testing

This is to confirm that the software product being developed has the entire range of the customer's functionality which
is proved to meet all expectations. The key idea here is to make sure that the website itself works properly.

Examples of what may go wrong:

- a login form doesn't allow the user to login with proper email;
- it is not possible to open a checkout page even though the products were added to the cart;
- literally any other functional or logical issue.

### Browsers compatibility

Even though Google Chrome is the [most popular browser nowadays](https://gs.statcounter.com/browser-market-share), there
is no monopoly on the browser market, and this is good. So the key task is to make sure that application looks and works
properly in a few main browsers, usually it could be the latest versions of Apple Safari, Google Chrome, Mozilla
Firefox, and Microsoft Edge.

Website testing in different browsers is a must because different browsers may interpret the same code in a slightly
different way. Even if your code is in absolute conformity with the development standards, some issues may arise on your
website, just due to a bug in a browser.

### Mobile devices compatibility

[The number of devices that people use to surf the web is increasing](https://www.broadbandsearch.net/blog/mobile-desktop-internet-usage-statistics)
. To ensure that your website displays correctly on mobile devices, you should test it. The larger your fleet of mobile
devices for testing is, the more stable your application will be. Still, not forget that the larger the number of
devices for testing, the more protracted and expensive the testing process will be. If you have a small app, then two
mobile phones (iOs and Android) and one tablet will probably be enough.

![Image optimization](https://www.halo-lab.com/images/posts/how-to-check-the-website-before-releasing-it/image-optimization.png)
Better, faster, stronger.

Ease up, speed up
-----------------

Optimization during the development process is essential for fast loading of the product on all devices, directly
affecting its ranking in search engines. Accordingly, this criterion affects the final monetization one way or another.

### Image optimization

Optimization of images refers to the hygiene of a modern web app. Although the Internet nowadays is fast enough, you
should keep in mind slow 3g network and places where people have to surf websites with limited Internet connection, such
as the underground. If you can save a hundred or two kilobytes for your user, you must do it.

Here are a few tools that may help you to optimize your images:

- for NextJS apps: <https://github.com/cyrilwanner/next-optimized-images>
- for GatsbyJS apps: <https://www.gatsbyjs.com/plugins/gatsby-image/>
- for WordPress apps: <https://wordpress.org/plugins/wp-smushit/>
- framework agnostic online tool: [https://imagecompressor.com](https://imagecompressor.com/)

### Test Google Lighthouse report

Google can improve the quality of your web page. It has audits of performance, accessibility, progressive web apps, SEO.
In addition to the check itself, it provides developers with advice on troubleshooting which is very handy.

You can use it in a few ways:

- [https://developers.google.com/speed/pagespeed/insights/rel="nofollow"](https://developers.google.com/speed/pagespeed/insights/)
  --- for a detailed report on your performance;
- [https://web.dev/measure/rel="nofollow"](https://web.dev/measure/) --- for an audit of 4 main categories: SEO,
  Accessibility, Best Practices, Performance (performance report is less detailed than in PageSpeed);
- and in a few more ways, such as in Chrome dev tools, as a NodeJS module, etc. Check out this article for more
  details [https://developers.google.com/web/tools/lighthouse#devtoolsrel="nofollow"](https://developers.google.com/web/tools/lighthouse#devtools)
  .

![Creative 404 pages](http://api.halo-lab.com/wp-content/uploads/2020/09/Website-elements-1-2.png)Actually, we have
prepared the exciting 404 pages collection.

Collect them all and don't forget anything
------------------------------------------

A few common things of low priority can be simply overlooked in the design and development process. The only way not to
keep them under control through the whole project is to check their existence a few weeks before the release. It still
works well.

### 404 page was created

Page 404 usually appears when you unsuccessfully attempt to open something on the web which does not exist. It is
necessary because you just can't allow your user to get lost on your website. The proper 404-page design makes it clear
to a user that they used a route that doesn't exist and help them find the way back to your website. It's also an
excellent place to add an easter egg to your website
--- [сheck out these lists of outstanding design solutions in creating 404 pages.](https://search.muz.li/inspiration/404-page-not-found-design-inspiration/)

![Importance of favicons](https://www.halo-lab.com/images/posts/how-to-check-the-website-before-releasing-it/imortance-of-favicons.png)
Ensure everyone that your favicon does lead to the network.

### Favicon was added

Favicon is a tiny UX/UX element, but it is awful if a website has none of it. Favicons help us identify your website
from many others quickly: in a tab bar, list of favourite sites, etc

### Social network icons lead to real social networks accounts

The integration of the website with social networks today is rather required than desired. After all, there is no need
to enter the name on a particular social platform, instead you can click on a button and go to a specific page. So, we
should check if it leads to the desired networks.

![Perfect development without 'surprise' errors](https://www.halo-lab.com/images/posts/how-to-check-the-website-before-releasing-it/perfect-development-without-surprise-errors.png)
Fix errors, before they will be found.

Are you sure you're good at this?
---------------------------------

Certainly, a written code should be maintainable and stable, and some tools may help you identify problems if they, for
some reason, were left in a code.

### There are no console errors in the browser

The code is vulnerable to errors. However, by default, the errors are not visible in the browser. Though, they're
properly seen when you're using built-in browser developer tools. Make sure to check the browser development console to
ensure no error is left when you deliver a production application.

### There are no lint errors in the terminal

[Eslint](https://eslint.org/) is a code and analyzation tool that is de-facto a standard for the JavaScript applications
nowadays. It parses your codebase and can either suggest or force you to follow the best practices and sometimes
highlights errors in the codebase. The number of ways you can customize it is impressive, nevertheless, you can always
use the most popular configs.

- [Perfect eslint config](https://github.com/airbnb/javascript) that was created by Airbnb.
- Even though Airbnb eslint config is pretty
  good, [we decided to build our config](https://github.com/Halo-Lab/eslint-config-halo-lab) on top of it, where we
  override a few inconvenient rules. You're welcome to use it too.

### Readme file exists and has all relevant info

It is necessary to have a transparent readme file with description of how to install, run, and work with the project. At
all times it was more comfortable for a new developer to start working on a project without googling how to run it.

In addition to the installation/run info, the readme file may contain other information, such as code standards,
deployment guides, etc.

### Rollback plan

You can never be 100% sure that the new code will work properly in the production environment. Of course, it should be
tested locally and in the staging environment, but a probability that something can go wrong in production should not be
excluded.

Accordingly, you should always have a way out plan that will help you to roll back your application to the previous
version if something goes wrong in production. The rollback plan is also the right issue for adding to the readme file.

![Rollback plan for application](https://www.halo-lab.com/images/posts/how-to-check-the-website-before-releasing-it/rollback-plan-for-application.png)
Boring, but needed. Check the primary documentation pack.

Documents? Really? So boring, but essential
-------------------------------------------

Working with policies and documents is annoying, but seems to be the only way to protect the user's intellectual
property and data in the digital world. So make sure that your product is integrated and secured at the appropriate
safety and quality levels. Below is given the primary documentation pack:

- Fonts and images licenses;
- Terms of Service and Privacy policy;
- Terms and Conditions documentation;
- A cookie banner was added to the website;
- Other docs that needed for a website to meet GDPR compliance.

![SEO optimization](https://www.halo-lab.com/images/posts/how-to-check-the-website-before-releasing-it/seo-optimization.png)
Focus on SEO essentials.

Buddy with the search engine
----------------------------

You can hardly find people who don't know what SEO is. Long story short, this is a set of practices that facilitates
ranking your websites by the search engines. You are required to follow the best ways to ensure search engine crawlers
can get all the vital info from your website. BTW, Google Lighthouse (we wrote about this tool above) makes
identification of SEO issues easier and also gives some tips on how to fix them. Here is a list of a few items that
should be available on the website, so that the search engines can rank the website correctly.

### Basic meta tags added

Meta tags are parts of hypertext markup that help search robots understand what your site is about and what to broadcast
to a visitor in the search results page.

### Sitemap added

A sitemap is an XML file where you provide information about pages, videos, other files on the site, and how they are
interrelated. Search engines like Google read this file in order to crawl the website more intelligently. A sitemap
tells Google which pages and files may be essential in a particular site and provides valuable information.

### Robots.txt added

The robots.txt file helps search engines' crawlers to understand what pages should be present in the search result page
and what should not. You can use it to prohibit search engines from reading pages with private
data. [Check out the google's guide for more info](https://support.google.com/webmasters/answer/6062596?hl=en).

### Open graph, twitter graph meta tags added

The Open Graph and Twitter Graph markup is a set of meta tags that make links to your website to look more attractive
when you share them on Facebook and Twitter. Social networks are quite popular nowadays, so we should not exempt these
tags. Make it easier for new users to love your content before they visit your website.

### All content is relevant and up-to-date

Before the release, it is also necessary to check the relevance of the site's content: is it all relevant to the
product? Maybe the information is outdated, or somewhere can be found Lorem ipsum.

### Analytics trackers

Analytics trackers such as Hotjar and Google analytics are essential when you're improving your website's user
experience and building a marketing campaign. But make sure that they are needed because all additional scripts are
reducing the site's performance.

![Development with love](https://www.halo-lab.com/images/posts/how-to-check-the-website-before-releasing-it/development-with-love.png)

Aaaand, let's get it started
----------------------------

Each product is a separate case, which consists of many details. As we have already said, some elements can be easily
forgotten just because you don't need them permanently. To complete the product, we used a generated pre-release
checklist.
