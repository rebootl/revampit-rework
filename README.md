# Rework of the revamp-it.ch website

_This is currently a proof-of-concept / demo project / work-in-progress._

The goal of this project is to demonstrate how to build a dynamic website with few external dependencies.

For a simple company, organization or personal website it is often _not_ necessary to use a frontend framework and
create a single page application. A simple server side rendered website can be sufficient and easier to maintain.

However a completely static website or a statically built website from source files (e.g. markdown) may not provide
enough flexibility and ease of use to update and manage content.

Therefore we choose a mixed approach where most of the site is built from static templates but specific areas (e.g. a blog)
are dynamic and get their content from a database.

To manage the content comfortably we created a simple content management system (CMS) that allows to edit and create content.
The CMS was split into a separate server and the cms/ directory.

The project is written in type script with templates currently written in javascript (NOTE: I think it would be good to convert
everything to typescript). express.js is used as web server framework and sqlite as database. For styling tailwindcss is used.

The look of the site is originally based off of: https://github.com/g-but/revampit

## Development / Demo setup

The easiest way to run the project is to use deno. Make sure deno is installed on your system.

### Database setup

Run the set up script:

    deno run --allow-read --allow-write --allow-net ./setup-example-database.js

### Main website

Install and run the main website:

    cd ./website
    npm i
    npm run dev

### CMS

Install and run the CMS:

    cd ./cms    # from the base directory
    npm i
    npm run dev

### Tailwind CSS

To rebuild the css run the following command in the `./website` and/or `./cms` directories:

    npm run devtw
