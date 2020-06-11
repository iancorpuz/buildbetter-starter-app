# BuildBetter Starter App

Starter App

- [ ] Offline First data storage
- [ ] React Navigation
- [ ] Redux
- [ ] API libraries

## Setup Instructions

Install the following dependencies

- [ ] eslint for syntax checking [View details here](https://eslint.org/)
- [ ] Yarn for package installation [View details here](https://yarnpkg.com/getting-started/install)
- [ ] GitFlow [Concept/Methodology explainer](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

Initialize Gitflow

- [ ] From git terminal, run `git flow init`

## Application Structure

### Navigation

This app uses [React Navigation](https://reactnavigation.org/docs/getting-started).

To add a new screen, follow these steps:

- [ ] Add the main screen file on the `src/modules/<module name>/<screen name>.js` file. (e.g. `src/auth/Landing/LandingScreen.js`)
- [ ] Register the screen at `src/navigation/<PublicScreens/AuthenticatedScreens>.js` file.

### Local Database

This app uses [Realm DB](https://realm.io/docs/javascript/latest/)

To add new database entities, follow these steps:

- [ ] Add the following files to the `src/modules/<module name>/database` directory
  - [ ] Add schema name to the `src/modules/<module name>/database/constants.js` file
  - [ ] Schema file `./<entity name>Schema.js` (e.g. `src/modues/Content/database/ContentSchema.js`)
  - [ ] Model file `./<entity name>Model.js` (e.g. `src/modues/Content/database/ContentSchema.js`) see [Realm Docs](https://realm.io/docs/javascript/latest/#models)
- [ ] Register the entity schema at `src/database/schemas.js`
- [ ] If the database schema structure was updated, increment `SCHEMA_VERSION` at `src/database/schemas.js`
