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

## Export components using [bit.dev](https://bit.dev/)

Export components to [tunapanini.tupa-algo.visualizer](https://bit.dev/tunapanini/tupa-algo-visualizer)

### Install

```bash
yarn global add bit-bin
```

### Tag

[Set a version](https://docs.bit.dev/docs/tag-component-version) for component.

Tag All

```bash
yarn bit:tag --all 1.0.0
```

Tag specific component

```bash
# bit tag <id> <version>
bit tag stack-box 1.0.0
bit tag tunapanini.tupa-algo-visualizer/stack-box 1.0.0
```

### Export

The command below will export components to `tunapanini.tupa-algo-visualizer` as default.

Checkout workspace config named `defaultScope` in the `bit` section in `package.json` file.

```bash
bit export
```
