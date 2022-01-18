# Feature Libraries

Container components which are fully realized features. 

## Scaffolding

### Create a new feature library

Scaffold a library for `feature-name`:

```sh
nx generate @nrwl/react:library --directory=feature --style css --name={feature-name} --dryRun
```

For example:

```sh
nx generate @nrwl/react:library --directory=feature --style css --name=twin4j --dryRun
```

### Create a feature-specific component:

Scaffold a component for `feature-name` called `component-name`:

```sh
nx g @nrwl/react:component --project={feature-name} --export --directory=lib/components --name {component-name} --dryRun
```

For example:

```sh
nx g @nrwl/react:component --project=feature-person --export --directory=lib/components --name PersonList --dryRun
```

### Storybook

Configure storybook for the feature:

```sh
nx g @nrwl/react:storybook-configuration --generateStories --configureCypress=false --generateCypressSpecs=false --name=feature-{feature-name} --dryRun

# For example
nx g @nrwl/react:storybook-configuration --generateStories --configureCypress=false --generateCypressSpecs=false --name=feature-twin4j --dryRun
```

Configure storybook to use the shared Tailwind from `libs/ui`.

Create `{feature-project-root}/postcss.config.js` containing:

```js
module.exports = {
  plugins: {
    tailwindcss: { config: './libs/ui/tailwind.config.js' },
    autoprefixer: {},
  },
};
```

Create `{feature-project-root}/.storybook/tailwind-imports.css` containing:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Update `{feature-project-root}/.storybook/preview.js` with this line:

```js
import './tailwind-imports.css';
```

Run storybook for the feature:

```sh
nx run feature-{feature-name}:storybook

# For example
nx run feature-twin4j:storybook
```

Add stories for new components:

```sh
nx g @nrwl/react:stories --project feature-{feature-name} --generateCypressSpecs=false --dryRun

# For example
nx g @nrwl/react:stories --project feature-twin4j --generateCypressSpecs=false --dryRun
```

#### Storybook with GraphQL

Use the [Storybook Addon Apollo Client](https://storybook.js.org/addons/storybook-addon-apollo-client)


