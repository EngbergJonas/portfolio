# Table of contents

- [Table of contents](#table-of-contents)
  - [Portfolio App](#portfolio-app)
    - [Getting started](#getting-started)
    - [Workflow and Hosting](#workflow-and-hosting)
    - [Routing](#routing)
    - [Testing](#testing)
    - [Other](#other)
      - [Code validity](#code-validity)
      - [Formatting](#formatting)
      - [Styling](#styling)

## Portfolio App

This is an SPA app built with react-scripts and uses the TypeScript template.

The app is hosted on GitHub Pages and uses a GitHub Actions workflow (CI/CD) to test and deploy the app to https://engbergjonas.github.io/portfolio/.

### Getting started

To locally run the app clone the repository and follow these steps:

- open your terminal in the project root folder
- run `npm install` to install all the packages in package.json
- run `npm start` to run the app on `localhost:3000`

### Workflow and Hosting

The app is hosted on [GitHub Pages](https://pages.github.com/) and uses a [GitHub Actions](https://docs.github.com/en/actions) written in the [build-and-run-tests.yml](.github/workflows/build-and-run-tests.yml) file, (CI/CD) to test and deploy the app.

It is a very basic workflow that installs the dependencies, builds the app, runs the unit tests and starts the deploy to gh-pages if the previous steps were successful.

### Routing

The app uses [react-router-dom v6's](https://reactrouter.com/en/main) [createBrowserRouter()](https://reactrouter.com/en/main/routers/create-browser-router)-function for routes.

The app follows a workaround provided by [rafgraph's spa-github-pages](https://github.com/rafgraph/spa-github-pages), since the browser router doesn't work by default on GitHub Pages, since it doesn't support the [DOM History API](https://developer.mozilla.org/en-US/docs/Web/API/History).

- Eslint: code validity
- Prettier: code formatting
- TailwindCSS: css helper library
- React Router: routes
- i18next: localization

### Testing

The app uses [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit tests. Each test can be found under a `__tests__` folder in the same path as the component being tested. Helpers for tests are written in the [testUtils.ts](src/utils/testUtils.tsx) file.

Tests can be run using the `npm run test` command, following an optional filename if only specific tests should be run.

### Other

#### Code validity

[Eslint](https://eslint.org/) is used for code validity, the piple will not pass if there are linting errors. The rules can be found and modified in the [.eslintrc.js](.eslintrc.js) file.

To check for linting errors run `npm run lint`.

#### Formatting

The app uses [Prettier](https://prettier.io/) to enforce the source code's syntax. The rules can be found and modified in the [.prettierrc.json](.prettierrc.json) file.

To run formatting run `npm run format`.

#### Styling

The app uses the [tailwindcss](https://tailwindcss.com/) css-framework for css. Configurations can be found under the [tailwind.config.js](tailwind.config.js) file.

The [tailwind cheat sheet](https://nerdcave.com/tailwind-cheat-sheet) is recommended to help understand the different utility classes.
