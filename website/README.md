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

* add documentation
  * add a README with installation instructions, usage, etc.
    * disclaimer this is a proof-of-concept / demo
    * how to run it locally
    * how to deploy it to production -> TBD
    * how to use the admin interface
    * how the routes and templating works

## TODO

* add missing translations

* check/cleanup the dependencies in the package.jsons

* header navigation responsive, currently it breaks on smaller width

* a way to submit forms
  this is needed for the contact page, and also to register a repair and another
  one to register a donation

* blog
  * use markdown for the content rendering

* how to best handle req.. properties in typescript?

## DONE

* break out admin into separate directory

* shop link in the header should be visible that it goes to an external page
  => added a link icon next to the shop link in the header

* how to bundle tailwind for production?
  currently I'm just using Play CDN for development
  => we use the tailwind CLI, to create an output CSS
     the CLI scans the files and generates the output accordingly

     `npx tailwindcss -i ./tailwind-input.css -o ./static/tailwind.css`

     added the command to `npm run devtw`
