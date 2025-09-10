# Rework of the revamp-it.ch website

_This is currently a proof-of-concept / demo project._

The goal of this project is to demonstrate how to build a dynamic website with low external dependencies.
Specifically we do not want to introduce frontend frameworks like Nextjs and we want to keep other dependencies at a minimum [explain why?].

For an company or organization website or for a personal website it is often _not_ necessary to create a single page application
and use a frontend framework. In fact it may be detrimental to the performance of the website (e.g. loading times) and it introduces
a lot of unnecessary complexity (e.g. bundling, state management etc.). 

On the other hand a completely static website may not offer enough flexibility and ease of use to update and manage content.

For this demo we choose a somewhat mixed approach between a static and a dynamic page. Most of the website is built from static
templates but specific areas, for example a blog, get the content from a database.

The content management system is split up into a separate project: https://github.com/rebootl/revamp-backend

## WIP

* add missing content pages
  * /services/computer-repair-upgrades
  * /services/data-recovery-transfer
  * /services/hardware-recycling
  * /services/web-design-development
  * /workshops
  * /get-involved
  * /contact
  * more: there is more pages missing for the complete website,
    these are just the ones that are currently available through the menu,
    and cause an error because they are missing, so for a demo it would be nice
    to have at least these
    additional pages for later are mostly in the services for example cloud hosting etc.

## TODO

* check/cleanup the dependencies in the package.jsons

* add documentation
  * add a README with installation instructions, usage, etc.
    * disclaimer this is a proof-of-concept / demo
    * how to run it locally
    * how to deploy it to production -> TBD
    * how to use the admin interface
    * how the routes and templating works

* header navigation responsive, currently it breaks on smaller width

* a way to submit forms
  this is needed for the contact page, and also to register a repair and another
  one to register a donation

* blog
  * use markdown for the content rendering

* how to best handle req.. properties in typescript?

## DONE

* break out admin into separate repository

* shop link in the header should be visible that it goes to an external page
  => added a link icon next to the shop link in the header

* how to bundle tailwind for production?
  currently I'm just using Play CDN for development
  => we use the tailwind CLI, to create an output CSS
     the CLI scans the files and generates the output accordingly

     `npx tailwindcss -i ./tailwind-input.css -o ./static/tailwind.css`

     added the command to `npm run devtw`
