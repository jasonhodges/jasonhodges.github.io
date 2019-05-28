# jasonhodges.github.io

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `yarn start`  or `yarn hmr` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Commitizen
Commitizen should be installed globally (or locally) `npm install -g commitizen` in order for `git-cz` to work.
https://github.com/commitizen/cz-cli

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Publishing

Scripts have been set up to build the site as well as create the documentation via Compodoc. In order to create a full build and publish, run `yarn publish:full`.

Pushing changes on develop will kick of TravisCI. If a success pipeline is complete, Travis will deploy to master on Github and the newly updated site will be live.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
