# Product Catalog Demo

## Overview
This project is based on AngularJS tutorial

## Prerequisites

### Git
- A good place to learn about setting up git is [here][git-github]
- Git [home][git-home] (download, documentation)

### Node.js
- Generic [installation instructions][node-generic].
- Mac DMG [here][node-mac]
- Windows download from [here][node-windows]. (You will also need [7 Zip] to unzip the node archive)
  (and don't forget to add `node.exe` to  your executable path)

### Java
- http://www.java.com

## Workings of the application

- The application filesystem layout structure is based on the [angular-seed] project.
- There is no backend (no server) for this application. Instead we fake the XHRs by fetching
  static json files.
- Read the Development section at the end to familiarize yourself with running and developing
  an angular application.

## Development with angular-seed

The following docs apply to all angular-seed projects and since the phonecat tutorial is a project
based on angular-seed, the instructions apply to it as well.

### Running the app during development

1. run `./scripts/web-server.js`
2. navigate your browser to `http://localhost:8000/app/index.html` to see the app running in your
   browser.

### Running unit tests

Requires java.

1. start `./scripts/test-server.sh` (on windows `scripts\test-server.bat`)
2. navigate your browser to `http://localhost:9876/`
3. click on: capture strict link
4. run `scripts/test.sh` (on windows `scripts\test.bat`)
5. edit files in `app/` or `src/` and save them
6. go to step 4.


### Continuous unit testing

Requires ruby and [watchr](https://github.com/mynyml/watchr) gem.

1. start JSTD server and capture a browser as described above
2. start watchr with `watchr scripts/watchr.rb`
3. in a different window/tab/editor `tail -f logs/jstd.log`
4. edit files in `app/` or `src/` and save them
5. watch the log to see updates


### End to end testing

Angular ships with a baked-in end-to-end test runner that understands angular, your app and allows
you to write your tests with jasmine-like BDD syntax.

Requires a webserver, node.js + `./scripts/web-server.js` or your backend server that hosts the angular static files.

Check out the
[end-to-end runner's documentation](http://docs.angularjs.org/guide/dev_guide.e2e-testing) for more
info.

* create your end-to-end tests in `test/e2e/scenarios.js`
* serve your project directory with your http/backend server or node.js + `scripts/web-server.js`
* to run do one of:
  * open `http://localhost:port/test/e2e/runner.html` in your browser
  * run the tests from console with [Testacular](vojtajina.github.com/testacular) via
    `scripts/e2e-test.sh` or `script/e2e-test.bat`

## Application Directory Layout

    app/                --> all of the files to be used in production
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      index.html        --> app layout file (the main html template file of the app)
      index-async.html  --> just like index.html, but loads js files asynchronously
      js/               --> javascript files
        app.js          --> application
        controllers.js  --> application controllers
        directives.js   --> application directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
      lib/              --> angular and 3rd party javascript libraries
        angular/
          angular.js        --> the latest angular js
          angular.min.js    --> the latest minified angular js
          angular-*.js      --> angular add-on modules
          version.txt       --> version number
      partials/             --> angular view partials (partial html templates)
        partial1.html
        partial2.html

    config/testacular.conf.js        --> config file for running unit tests with Testacular
    config/testacular-e2e.conf.js    --> config file for running e2e tests with Testacular

    scripts/            --> handy shell/js/ruby scripts
      e2e-test.sh       --> runs end-to-end tests with Testacular (*nix)
      e2e-test.bat      --> runs end-to-end tests with Testacular (windows)
      test.bat          --> autotests unit tests with Testacular (windows)
      test.sh           --> autotests unit tests with Testacular (*nix)
      web-server.js     --> simple development webserver based on node.js

    test/               --> test source files and libraries
      e2e/              -->
        runner.html     --> end-to-end test runner (open in your browser to run)
        scenarios.js    --> end-to-end specs
      lib/
        angular/                --> angular testing libraries
          angular-mocks.js      --> mocks that replace certain angular services in tests
          angular-scenario.js   --> angular's scenario (end-to-end) test runner library
          version.txt           --> version file
      unit/                     --> unit level specs/tests
        controllersSpec.js      --> specs for controllers
        directivessSpec.js      --> specs for directives
        filtersSpec.js          --> specs for filters
        servicesSpec.js         --> specs for services

