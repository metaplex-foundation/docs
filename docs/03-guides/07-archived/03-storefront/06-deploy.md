# Deploy

## GitHub Pages

Primarily you need to specify your repo in `js/packages/web/package.json` file

Pay attention to these two lines:

```json
"deploy:gh": "yarn export && gh-pages -d ../../build/web --repo https://github.com/metaplex-foundation/metaplex -t true",
"deploy": "ASSET_PREFIX=/metaplex/ yarn build && yarn deploy:gh",
```

There are 2 things to change:

- specify your repo URL instead of `https://github.com/metaplex-foundation/metaplex` (for example, `https://github.com/my-name/my-metaplex`)
- set `ASSET_PREFIX` to repo name (for example, `ASSET_PREFIX=/my-metaplex/`)

After that, the lines will look like this:

```json
"deploy:gh": "yarn export && gh-pages -d ../../build/web --repo https://github.com/my-name/my-metaplex -t true",
"deploy": "ASSET_PREFIX=/my-metaplex/ yarn build && yarn deploy:gh",
```
Add the file _config.yml to the root directory
add to this file:

```yml
lsi: false
safe: true
source: js/packages/web
incremental: false
highlighter: rouge
gist:
  noscript: false
kramdown:
  math_engine: mathjax
  syntax_highlighter: rouge
```

Please check that you select gh-pages branch in source on the GitHub Pages tab (current repository)

And after that, you can publish the Metaplex app to GitHub Pages by the following commands:

```bash
cd js/packages/web
yarn deploy
```

### GitHub Pages with a custom domain

If you have a custom domain linked to the GitHub Pages in your repo, then the instructions are the same as above, but your need to remove  `ASSET_PREFIX` from the deploy script:

```json
"deploy:gh": "yarn export && gh-pages -d ../../build/web --repo https://github.com/my-name/my-metaplex -t true"
"deploy": "yarn build && yarn deploy:gh",
```

Prepare github pages for deploying - select branch in repository then continue:

![Init store](/img/deploy/github-pages-selecting.png)

The publishing commands are the same:

```bash
cd js/packages/web
yarn deploy
```

## Vercel

To publish the Metaplex app to Vercel, you first need to visit [https://vercel.com/](https://vercel.com/) and create a new project linked to your github repo.

After that, configure this project with the following settings:

- Framework: `Next.js`
- Root directory: `js`
- Output directory: `packages/web/.next`

One last thing: specify `REACT_APP_STORE_OWNER_ADDRESS_ADDRESS` in the Environment Variables section

![Init store](/img/deploy/vercel-configuration.png)
