# Tupa Algo Visualizer

## Available Scripts

In the project directory, you can run:

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn lint`

Lint code with ESLint

### `yarn prettier`

Format code with Prettier

### `yarn storybook`

Serve storybook

### `yarn build-storybook`

Build storybook

### `yarn tag <version>` & `yarn export`

[Set a version](https://docs.bit.dev/docs/tag-component-version) for component.

> Don't forget to sign in with `bit login` before tag or export.

This scripts will set version of components and export them to [tunapanini.tupa-algo.visualizer](https://bit.dev/tunapanini/tupa-algo-visualizer) using [bit.dev](https://bit.dev/)
You can also use `bit tag`. Check out [bit.dev Documents](https://docs.bit.dev/docs/quick-start).

#### Simple usage

Tag

```bash
# Tag all
yarn tag --all 1.0.0

# Tag specific component
yarn tag components/StackBox 1.0.0
```

Export

```bash
yarn export
```
