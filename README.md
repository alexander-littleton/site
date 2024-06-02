### Running Locally

Requires Node 18 or higher. Run `npm i` then `npm start` to standup the `vite` server.

### Deploying

Just use `npm run deploy` which implicitly depends on the `predeploy` command. This populates the build folder with raw HTML and JS and pushes it into the `gh-pages` remote branch, which is used to serve the site as a static webpage.
