const locale = {
  en: {
    title: 'RevampIt Blog',
    description: 'A space for exploring sustainability, open source, and the art of giving technology a second life.'
  },
  de: {
    title: 'RevampIt Blog',
    description: 'Ein Ort, um Nachhaltigkeit, Open Source und die Kunst zu erforschen, Technologie ein zweites Leben zu geben.'
  }
};

/**
 * The HTML content for the blog page, exported as a template literal function.
 * @param {Array<Object>} entries - Array of blog entries. Each entry should have at least { slug, title, content }.
 * @param {string} [language='en'] - The current language code ('en' or 'de').
 * @returns {string} The HTML content
 */
export function pageContent(entries, language = 'en') {
  const lang = locale[language] ? language : 'en';
  return `
  <main class="pt-20 min-h-screen">
    <div class="relative bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white py-24 overflow-hidden">
      <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div class="container mx-auto px-4 relative">
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            ${locale[lang].title}
          </h1>
          <p class="text-xl text-green-100 max-w-2xl">
            ${locale[lang].description}
          </p>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-4 py-16">
      <ul class="grid grid-cols-1 gap-8">
        ${entries.map(entry => `
          <li class="bg-white rounded-lg shadow-md overflow-hidden">
            <a href="/blog/${entry.slug}" class="block hover:bg-gray-50">
              <div class="p-6">
                <h2 class="text-2xl font-bold mb-2">${entry.title}</h2>
                <p class="text-gray-700">${entry.content.substring(0, 100)}...</p>
              </div>
            </a>
          </li>
        `).join('')}
      </ul>
    </div>
  </main>`;
}