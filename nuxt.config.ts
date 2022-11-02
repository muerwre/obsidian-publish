export default defineNuxtConfig({
  alias: {
    "~": "/<rootDir>",
  },
  modules: ["@nuxt/content", "@nuxtjs/color-mode"],
  typescript: {
    shim: false,
    typeCheck: true,
  },
  content: {
    navigation: {
      fields: ["blblblb"],
    },
    highlight: {
      theme: {
        default: "github-dark",
        light: "solarized-light",
      },
      preload: [
        "shell",
        "c",
        "go",
        "graphql",
        "scss",
        "shell",
        "sh",
        "docker",
        "typescript",
        "javascript",
        "nginx",
        "bash",
        "yaml",
        "sh",
      ],
    },
  },
  target: "static",
  css: ["@/assets/css/main.scss"],
  head: {
    link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
  },
  colorMode: {
    preference: "dark",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },
  app: {
    buildAssetsDir: "nuxt/",
  },
});
