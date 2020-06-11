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

To add a new screen follow these steps:
- [ ] add the main screen file on the `src/modules/<module name>/<screen name>.js` file. (e.g. `src/auth/Landing/LandingScreen.js`)
- [ ] register the screen at `src/navigation/<PublicScreens/AuthenticatedScreens>.js` file.
