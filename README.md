


# Example Todo App in Angular 4

## quick notes 02-08-2020

nodejs - 8.16.2
npm - 6.4.1


```bash
nvm list
nvm install 8.6.2
```

Install local @angular/cli@1.4.5:

```bash
npm install @angular/cli@1.4.5
```
and to run ng cli command locally do `node_modules/.bin/ng <cmd>`

When running `ng serve`, during `node-gyp rebuild` in case of error:
```
Error: Command failed: /Users/binle/.pyenv/shims/python2
pyenv: python2: command not found
```
That's most because pyenv global version is 3.x, not 2.x. To fix it:
```
pyenv local 2.<some-minor-version-installed>
```
This adds a `.python-version` file to the local folder, which pyenv to pick the specified (2.x) version locally so `python2` command is available.



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
