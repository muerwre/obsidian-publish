# Self-hosted Obsidian Vault

Use [Obsidian](https://obsidian.md) for content editing at `./content` folder. Made with
[NuxtJS](https://v3.nuxtjs.org) and [Nuxt Content Plugin](https://content.nuxtjs.org/).

## Running

```shell
yarn
yarn dev
```

## Publishing

```shell
yarn generate
cp -a ./.outputs/public ./somewhere
```

- Dockerfile included in `./docker`
- Sample `drone-ci` configurations for gh-pages (`./.drone.gh-pages.yml`) and docker registry
  (`./.drone.docker.yml`).

## Supported Obsidian features

- WikiLinks (should be set up to relative in order to work)
- Highlight
- Code blocks
- Nested pages

## Other feature

- Adaptive layout
- SEO Optimized
- Day / Night theme switching
