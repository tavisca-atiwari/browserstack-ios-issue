# Browserstack-IOS-Issue

- Sample project for identifying browserstack ios issue

## Technologies used

- WDIO 6 / Mocha / TypeScript

## Prerequisite

- Node version 12 or higher
- Install node version : v12.18.4 from https://nodejs.org/fr/blog/release/v12.18.4/
- (for local execution) update chromedriver version as per installed chrome version.

## Quick Start

- install the dependencies: `npm install`
- For Browserstack execution set the following environment variables with your Browserstack credentials.
  - BROWSERSTACK_USERNAME
  - BROWSERSTACK_ACC_KEY

## Run the Tests

### Local Chromedriver Execution

`npm run test:chromedriver`

### Cloud Execution with browserstack

`npm run test:bs`
