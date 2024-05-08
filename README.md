# Travis Southard

## Overview

This is the source code for [travissouthard.com](https://travissouthard.com/) and a few small static site projects when appropriate.

Contact Travis for work at [travissouthard@proton.me](mailto:travissouthard@proton.me).

## Tools

The main page and static site projects within are made with:
- HTML5
- CSS3
- Javascript
- JQuery

For more of the tools and projects Travis has worked on visit [the portfolio](https://travissouthard.com/#projects).

## Scripts

In this projects there is a `scripts` folder with the following scripts:

| Script | Description |
| ------ | ----------- |
| buildPages.js | Generates HTML files from the `data.json` file in the `data` folder |
| generateRssXml.js | Generates a `rss.xml` file from the `data.json` in the `data` folder |
| build | Updates the `data.json` file from `data.js` and runs `buildpages.js` and then `generateRssXml.js |

The only one needed to be run manually is `build` with the command: `./scripts/build`
