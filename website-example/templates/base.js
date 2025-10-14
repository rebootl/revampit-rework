
const locale = {
  en: {
    head: {
      title: 'Home - RevampIT',
      metaDescription: 'Learn about our mission to extend the life of IT devices and promote sustainable computing practices.'
    },
    nav: {
      home: 'Home',
      services: 'Services',
      servicesComputerRepair: 'Computer Repair & Upgrades',
      servicesDataRecovery: 'Data Recovery & Transfer',
      servicesHardwareRecycling: 'Hardware Recycling',
      servicesWebDesign: 'Web Design & Development',
      shop: 'Shop',
      wiki: 'Wiki',
      projects: 'Projects',
      workshops: 'Workshops',
      getInvolved: 'Get Involved',
      blog: 'Blog',
      contact: 'Contact',
    },
    footer: {
      tagline: 'Transforming the future of IT through sustainable refurbishment and recycling.',
      navigation: 'Navigation',
      contactUs: 'Contact Us',
      retailLocation: 'Retail Location',
      country: 'Switzerland',
      warehouse: 'Warehouse',
      appointmentOnly: '(by appointment only)',
      openingHours: 'Opening Hours',
      monday: 'Monday: 9:00 - 12:00',
      tueFri: 'Tuesday - Friday: 13:00 - 17:00',
      allRightsReserved: 'All rights reserved.',
      social1: 'Follow us on Mastodon',
      contactMap: 'Contact / Map'
    }
  },
  de: {
    head: {
      title: 'Startseite - RevampIT',
      metaDescription: 'Erfahren Sie mehr über unsere Mission, die Lebensdauer von IT-Geräten zu verlängern und nachhaltige Computerpraktiken zu fördern.'
    },
    nav: {
      home: 'Startseite',
      services: 'Dienstleistungen',
      servicesComputerRepair: 'Computerreparatur & Upgrades',
      servicesDataRecovery: 'Datenrettung & Übertragung',
      servicesHardwareRecycling: 'Hardware-Recycling',
      servicesWebDesign: 'Webdesign & Entwicklung',
      shop: 'Shop',
      wiki: 'Wiki',
      projects: 'Projekte',
      workshops: 'Workshops',
      getInvolved: 'Mitmachen',
      blog: 'Blog',
      contact: 'Kontakt',
    },
    footer: {
      tagline: 'Die Zukunft der IT durch nachhaltige Wiederaufbereitung und Recycling gestalten.',
      navigation: 'Navigation',
      contactUs: 'Kontakt',
      retailLocation: 'Ladenlokal',
      country: 'Schweiz',
      warehouse: 'Lager',
      appointmentOnly: '(nur nach Vereinbarung)',
      openingHours: 'Öffnungszeiten',
      monday: 'Montag: 9:00 - 12:00',
      tueFri: 'Dienstag - Freitag: 13:00 - 17:00',
      allRightsReserved: 'Alle Rechte vorbehalten.',
      social1: 'Folge uns auf Mastodon',
      contactMap: 'Kontakt / Karte'
    }
  }
}

// rework/templates/base.js
const navItems = [
  {
    key: 'home',
    link: '/'
  },
  {
    key: 'services',
    dropdown: true,
    items: [
      { key: 'servicesComputerRepair', link: '/services/computer-repair-upgrades' },
      { key: 'servicesDataRecovery', link: '/services/data-recovery-transfer' },
      { key: 'servicesHardwareRecycling', link: '/services/hardware-recycling' },
      { key: 'servicesWebDesign', link: '/services/web-design-development' }
    ]
  },
  {
    key: 'shop',
    link: 'https://shop.revamp-it.ch/',
    external: true
  },
  {
    key: 'wiki',
    link: '/wiki'
  },
  {
    key: 'projects',
    link: '/projects'
  },
  {
    key: 'workshops',
    link: '/workshops'
  },
  {
    key: 'getInvolved',
    link: '/get-involved'
  },
  {
    key: 'blog',
    link: '/blog'
  },
];

/**
 * Returns the base HTML template with the provided content inserted.
 * @param {Object} params
 * @param {string} params.content - The HTML content to insert into the main area.
 * @param {Object} params.req - The request object
 * @returns {string} The full HTML string.
 */
export const baseTemplate = ({ content, req }) => {

  const ref = req.path || '';
  const currentLanguage = req.lang || 'en';

  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${locale[currentLanguage].head.title}</title>
    <meta name="description" content="${locale[currentLanguage].head.metaDescription}" />
    <!--<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>-->
    <link rel="stylesheet" href="/static/tailwind.css" />
    <script src="/static/nav-dropdown.js" defer></script>
  </head>
  <body class="antialiased">
    <div class="min-h-screen bg-gradient-to-b from-white to-gray-50">

      <!-- Header -->
      <header class="bg-white/90 backdrop-blur-sm fixed top-0 left-0 right-0 z-40 transition-all duration-300">

        <div class="bg-yellow-50 border-t border-b border-yellow-200 text-yellow-800">
          <div class="mx-auto max-w-7xl px-6 py-3 flex items-center justify-center text-sm">
            <span class="mr-3 font-semibold">Demo:</span>
            <span>This is a demo page — for the real site go to <a href="https://revamp-it.ch" class="underline text-green-600 hover:text-green-700" target="_blank" rel="noopener noreferrer">revamp-it.ch</a>.</span>
          </div>
        </div>

        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div class="flex lg:flex-1 items-center gap-4">
            <a href="/" class="flex items-center gap-2">
              <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-green-600">
                <span class="text-white font-bold text-xl">R</span>
              </div>
              <span class="text-xl font-bold text-gray-900">RevampIT</span>
            </a>
          </div>
          <div class="items-center lg:flex lg:gap-x-6">

            ${ navItems.map(item => item.dropdown ?
                `<div class="relative group nav-dropdown-parent">
                   <button id="nav-services-trigger" class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-green-600 transition-colors duration-200 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-600" aria-haspopup="true" aria-expanded="false">
                     ${locale[currentLanguage].nav[item.key]}
                     <svg id="nav-services-chevron" class="w-4 h-4 ml-1 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                   </button>
                   <div id="nav-services-dropdown" class="hidden absolute left-0 top-full pt-3 z-50 min-w-[220px] rounded-xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5">
                     ${item.items.map(dropdownItem => `
                       <a href="${dropdownItem.link}" class="block rounded-lg px-3 py-2 text-sm leading-6 text-gray-900 hover:bg-gray-50 hover:text-green-600 transition-colors duration-200">${locale[currentLanguage].nav[dropdownItem.key]}</a>
                     `).join('')}
                   </div>
                 </div>` :
                `<a href="${item.link}" class="text-sm font-semibold leading-6 text-gray-900 hover:text-green-600 transition-colors duration-200 ${item.external ? 'flex items-center' : ''}" ${item.external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                  ${locale[currentLanguage].nav[item.key]}
                  ${item.external ? '<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 3h6v6M10 14L21 3"/></svg>' : ''}
                </a>`
            ).join('') }

            <a href="/contact" class="text-sm font-semibold leading-6 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">${locale[currentLanguage].nav.contact}</a>
            <div class="relative group nav-dropdown-parent">
              <button id="lang-switcher-trigger" class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-green-600 transition-colors duration-200 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-600" aria-haspopup="true" aria-expanded="false">
                <span id="current-lang">${currentLanguage.toUpperCase()}</span>
                <svg id="lang-switcher-chevron" class="w-4 h-4 ml-1 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="lang-dropdown" class="hidden absolute right-0 top-full pt-3 z-50 rounded-xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5">
                <a href="/set-lang?lang=en&ref=${ref}" class="block rounded-lg px-3 py-2 text-sm leading-6 text-gray-900 hover:bg-gray-50 hover:text-green-600 transition-colors duration-200">EN</a>
                <a href="/set-lang?lang=de&ref=${ref}" class="block rounded-lg px-3 py-2 text-sm leading-6 text-gray-900 hover:bg-gray-50 hover:text-green-600 transition-colors duration-200">DE</a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div class="pt-12"></div>

      ${content}

      <!-- Footer -->
      <footer class="bg-gray-900 text-white">
        <div class="container mx-auto px-4 py-12">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <a href="/" class="flex items-center gap-2 mb-4">
                <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-green-600">
                  <span class="text-white font-bold text-xl">R</span>
                </div>
                <span class="text-xl font-bold text-gray-100">RevampIT</span>
              </a>
              <p class="text-sm text-gray-300">${locale[currentLanguage].footer.tagline}</p>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-4">${locale[currentLanguage].footer.navigation}</h3>
              <ul class="space-y-2">
                <li><a href="/services" class="text-gray-300 hover:text-white transition-colors">${locale[currentLanguage].nav.services}</a></li>
                <li><a href="https://www.revamp-it.ch/index.php/de/shop-de" class="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">${locale[currentLanguage].nav.shop}</a></li>
                <li><a href="/projects" class="text-gray-300 hover:text-white transition-colors">${locale[currentLanguage].nav.projects}</a></li>
                <li><a href="/workshops" class="text-gray-300 hover:text-white transition-colors">${locale[currentLanguage].nav.workshops}</a></li>
                <li><a href="/get-involved" class="text-gray-300 hover:text-white transition-colors">${locale[currentLanguage].nav.getInvolved}</a></li>
                <li><a href="/blog" class="text-gray-300 hover:text-white transition-colors">${locale[currentLanguage].nav.blog}</a></li>
                <li><a href="/contact" class="text-gray-300 hover:text-white transition-colors">${locale[currentLanguage].nav.contact}</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-4">${locale[currentLanguage].footer.contactUs}</h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <span class="w-5 h-5 mt-1 mr-3 flex-shrink-0">📍</span>
                  <div>
                    <p class="font-medium">${locale[currentLanguage].footer.retailLocation}</p>
                    <p class="text-gray-300">Birmensdorferstr. 379</p>
                    <p class="text-gray-300">8055 Zürich</p>
                    <p class="text-gray-300">${locale[currentLanguage].footer.country}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <span class="w-5 h-5 mt-1 mr-3 flex-shrink-0">📍</span>
                  <div>
                    <p class="font-medium">${locale[currentLanguage].footer.warehouse}</p>
                    <p class="text-gray-300">Badenerstr. 816</p>
                    <p class="text-gray-300">8048 Zürich</p>
                    <p class="text-gray-300 text-sm">${locale[currentLanguage].footer.appointmentOnly}</p>
                  </div>
                </div>
                <div class="flex items-center">
                  <span class="w-5 h-5 mr-3">📞</span>
                  <a href="tel:+41439603264" class="text-gray-300 hover:text-white transition-colors">+41 (0)43 960 32 64</a>
                </div>
                <div class="flex items-center">
                  <span class="w-5 h-5 mr-3">✉️</span>
                  <a href="/contact" class="text-gray-300 hover:text-white transition-colors">${locale[currentLanguage].footer.contactMap}</a>
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-4">${locale[currentLanguage].footer.openingHours}</h3>
              <div class="flex items-start">
                <span class="w-5 h-5 mt-1 mr-3 flex-shrink-0">⏰</span>
                <div class="space-y-2">
                  <p class="text-gray-300">${locale[currentLanguage].footer.monday}</p>
                  <p class="text-gray-300">${locale[currentLanguage].footer.tueFri}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 pt-8 border-t border-gray-800">
            <div class="flex justify-center space-x-6">
              <a href="https://net.miaumuh.ch/@revamp" class="flex items-center gap-1 text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><span class="sr-only">Mastodon</span>
                ${locale[currentLanguage].footer.social1}
                <!-- icon source https://icons.getbootstrap.com/icons/mastodon/ -->
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mastodon" viewBox="0 0 16 16">
                  <path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a4 4 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522q0-1.288.66-2.046c.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764q.662.757.661 2.046z"/>
                </svg>
              </a>
            </div>
          </div>
          <div class="mt-8 text-center text-gray-400">
            <p>&copy; 2024 RevampIT. ${locale[currentLanguage].footer.allRightsReserved}</p>
          </div>
        </div>
      </footer>
    </div>
  </body>
</html>
`;}
