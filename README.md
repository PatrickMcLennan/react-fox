# create-treact-app

An agnostic starter template for a Client-Side React application using TypeScript. Out of the box support includes:

- scss
- styled-components
- jest + @testing-library/react
- storybook

Using `create-treact-app` will allow you to build a performant app that is minified, prefixed + transpiled and has some defaults in regards to bundling vendor code. **It is recommended that you maintain the webpack configuration given as your app grows** -- for webpack to do what it does best it should grow and adapt with your project, so a basic understanding of Webpack will help you acheive the best results. **However no webpack skills are required to use this** and it is able to handle apps of all sizes, from development to production.

## How do I use it?

| How Do I...             | ...by running this     |
| ----------------------- | ---------------------- |
| Run a dev server?       | `yarn start`           |
| Run my tests?           | `yarn test`            |
| Compile for production? | `yarn build`           |
| Start Storybook?        | `yarn storybook`       |
| Build Storybook?        | `yarn build-storybook` |

### First thing's first

1. Add the `.env` to the `.gitignore` if you plan on using it. Otherwise it can be deleted and the `new Dotenv()` plugin declaration within `webpack.common.js` can be removed.
2. If you won't be using styled-components, than you should remove the `optimization.splitChunks.styledComponents` & `optimization.splitChunks.jsCSS` properties within `webpack.prod.js`, as that code is being bundled seperately at build.
