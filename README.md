# Astro Starter Kit: Minimal

```sh
pnpm create astro@latest -- --template gapeienkoa/astro
```


## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |


## Changes manual reproduce and source links

| № | Source | Affected files |
|-|-|-|
|1|https://docs.astro.build/en/guides/typescript/#typescript-editor-plugin|`tsconfig.json` `package.json`|
|2|https://docs.astro.build/en/guides/typescript/#type-imports|`tsconfig.json`|
|3|https://docs.astro.build/en/guides/typescript/#import-aliases and https://ui.shadcn.com/docs/installation/astro#edit-tsconfigjson-file|`tsconfig.json`|
|4|https://docs.astro.build/en/guides/typescript/#extending-global-types|`src/env.d.ts`|
|5|https://docs.astro.build/en/guides/typescript/#type-checking|`package.json`|
|6|https://docs.astro.build/en/guides/dev-toolbar/#per-project|`astro.config.mjs`|
|7|https://docs.astro.build/en/basics/astro-pages/#astro-pages and https://docs.astro.build/en/basics/layouts/#importing-layouts-manually-mdx|`src/layouts/BaseLayout.astro` `src/pages/index.astro`
|8|https://github.com/withastro/astro/issues/9525 and https://github.com/withastro/astro/pull/12128|`astro.config.mjs`|
|9|https://vite.dev/guide/env-and-mode#env-variables|`.gitignore`|
|10|https://docs.astro.build/en/recipes/docker/#multi-stage-build-using-ssr and https://pnpm.io/docker|`Dockerfile`|
|11|https://docs.astro.build/en/recipes/docker/#adding-a-dockerignore and https://pnpm.io/docker|`.dockerignore`|
