# Binary Coffee Blog

This is a simple serverless blog built with VitePress (Vue 3) and deployable to GitHub Pages.

Commands:

```powershell
# install deps
npm install

# run local dev server
npm run docs:dev

# build static site
npm run docs:build

# preview built site
npm run docs:serve
```

To deploy, create a GitHub Action or push the `docs/.vitepress/dist` contents to the `gh-pages` branch. A sample GitHub Action is included in `.github/workflows/deploy.yml`.
