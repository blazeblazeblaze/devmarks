# Devmarks Prototype

![Devmarks Screenshot](https://bitbucket.org/blazejhadzik/devmarks/raw/master/devmarks_screenshot.png)

This is a bookmark organising app written in React/Redux.
It comes with a dummy API with 3 endpoints:

* topics
* topic_details
* tutorials

Each bookmark has a unique `slug` and belongs to a `category`. It also can
have multiple tutorials associated. Additionally, topic page will display
related tutorials (from the same category if available).

# Prerequirements

* Nodev8
* Yarn/Npm

# Getting started

* `yarn install`
* `yarn start`

# Making changes

* Fake API data source is located in `src/api/raw_data.js`

# Tests

* Enzyme and Jest
* Run `yarn test`
