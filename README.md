# Rework of the revamp-it.ch website

_This is currently a proof-of-concept / demo / work-in-progress project._

The goal of this project is to demonstrate a way to built a dynamic website with few external dependencies.

For a simple company, organization or personal website it is often _not_ necessary to use a frontend framework and
create a single page application. A simple server side rendered website can be sufficient and easier to maintain.

However, a completely static website or a statically built website from source files (e.g. markdown) may not satisfy
requirements to easily update and manage content.

Therefore we choose a mixed approach where most of the site is built from static templates but specific areas (e.g. a blog)
are dynamic and get their content from a database.

To manage the content comfortably we created a simple content management system (CMS) that allows to edit and create content.
The CMS was split into a separate server in the cms/ directory.

The project is written in TypeScript with templates currently written in JavaScript. Express is used as web server framework
and sqlite as database. For styling Tailwind CSS is used.

NOTE/TODO: I think it would be good to convert the templates to TypeScript as well.

The look of the site is originally based off of: https://github.com/g-but/revampit

## Development / Demo setup

The easiest way to run the project is to use deno. Make sure deno is installed on your system. NPM is also required to install
the dependencies for the website and CMS.

### Setup example database

    mkdir ./db
    deno run --allow-all ./dbscripts/00_setup-database.ts
    deno run --allow-all ./dbscripts/01_setup-entries-table.ts
    deno run --allow-all ./dbscripts/02_setup-example-data.ts

### Run server

Install and run the server:

    deno task dev

The server should be running at http://localhost:3002 and show the main page of the website.

The admin interface/CMS should be running at http://localhost:3002/admin and show a login screen.

The example user and password are 'admin' and '1234'. This can be changed in the ./dbscripts/00_setup-database.ts script.

NOTE/TODO: Currently the users and passwords cannot yet be managed within the CMS. Ideally unsafe default passwords
should never be used but instead a password should be set when executing the setup database script or at 1st login.
As this is only a demo it is currently left as it is.

Further information about the development and it's status see: ./website-example/README.md and ./cms/README.md

### Tailwind CSS

The tailwind CLI is required to rebuild the CSS after changes. Install it via npm or use the standalone
binary. TODO: Add link to tailwind installation instructions.

To rebuild the CSS automatically on changes run in a separate terminal window:

    deno task devtwexample
    deno task devtwadmin

## Deployment on a server for demonstration purposes

Copy the .env.example file to .env and adjust the settings as needed.

    cp .env.example .env

Use docker to run the setup database scripts:

    mkdir db/

    docker run --rm \
      --env-file=.env \
      -v db:/db \
      -v .:/app \
      -w /app \
      denoland/deno:latest \
      deno run --allow-all ./dbscripts/00_setup-database.ts

NOTE: Run this for the respective database scripts as needed.

NOTE: This creates the database file with root permissions. Eventually you'll want to correct this:

    sudo chown $USER:$USER ./db/db.sqlite

Then use docker compose to run both servers in containers.

    docker compose up -d

Usually you would use a reverse on the server (e.g. nginx or apache) to forward requests to the two servers
running the CMS and the main website and also set up SSL with e.g. certbot.
