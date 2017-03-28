# FX Rates Right

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

### Description

App to retrieve FX rates on any given weekday (since 04/01/1999).
Written for an interview coding challenge.

### Features

 * React
 * Redux
 * React Router
 * davezuko's development setup (Webpack, ES6+, ...)

### Install from source

First, clone the project:

```bash
$ git clone https://github.com/successkrisz/fx-rates-right.git <my-project-name>
$ cd <my-project-name>
```

Then install dependencies and check to see it works. It is recommended that you use [Yarn](https://yarnpkg.com/) for deterministic installs, but `npm install` will work just as well.

```bash
$ yarn install    # Install project dependencies
$ yarn start      # Compile and launch (same as `npm start`)
```
If everything works, you should see the following:

<img src="http://i.imgur.com/Kk2qTHC.png" />

While developing, you will probably rely mostly on `yarn start`; however, there are additional scripts at your disposal:

|`yarn run <script>`|Description|
|------------------|-----------|
|`start`|Serves your app at `localhost:3000`. HMR will be enabled in development.|
|`compile`|Compiles the application to disk (`~/dist` by default).|
|`dev`|Same as `yarn start`, but enables nodemon for the server as well.|
|`test`|Runs unit tests with Karma and generates a coverage report.|
|`test:dev`|Runs Karma and watches for changes to re-run tests; does not generate coverage reports.|
|`deploy`|Runs linter, tests, and then, on success, compiles your application to disk.|
|`deploy:dev`|Same as `deploy` but overrides `NODE_ENV` to "development".|
|`deploy:prod`|Same as `deploy` but overrides `NODE_ENV` to "production".|
|`lint`|Lint all `.js` files.|
|`lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|

### Thank you

[David Zukowski](https://github.com/davezuko) - For creating an amazing development `boilerplate`
