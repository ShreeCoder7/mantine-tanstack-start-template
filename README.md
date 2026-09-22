# Mantine TanStack Start template

This is a template for [TanStack Start](https://tanstack.com/start) + [Mantine](https://mantine.dev/).

## Features

This template comes with the following features:

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [CSS modules](https://mantine.dev/styles/css-modules)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- Oxlint setup for TypeScript and React sources

## npm scripts

### Build and dev scripts

- `dev` – start development server on [http://localhost:3000](http://localhost:3000)
- `build` – build production version of the app
- `preview` – locally preview production build

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs oxlint and stylelint
- `format:test` – checks files with oxfmt
- `vitest` – runs vitest tests
- `vitest:watch` – starts vitest watch
- `test` – runs `typecheck`, `format:test`, `lint`, `vitest` and `build` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `format:write` – formats all files with oxfmt
