# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Deploy to GitHub Pages

Steps to publish this site to GitHub Pages (repository `nutricionIA`):

- Install dependencies (this will install `gh-pages` declared in devDependencies):

```sh
npm install
```

- Build and deploy (this runs the `predeploy` script then `deploy`):

```sh
npm run deploy
```

- The site will be available at: `https://dyeyo.github.io/nutricionIA`

Notes:
- `next.config.ts` already sets `basePath` and `assetPrefix` to `/nutricionIA` and enables static export.
- If your repository name differs, update `basePath` and `assetPrefix` accordingly in `next.config.ts`.
