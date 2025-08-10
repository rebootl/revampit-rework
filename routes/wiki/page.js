export function pageContent(language) {
  return `
<main class="pt-20 min-h-screen">
  <section class="bg-gray-200 py-10">
    <!-- Header text centered within the main max width -->
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-3xl font-bold mb-4">Wiki</h1>
      <p class="text-gray-600 mb-4">Our Revamp Wiki is embedded below. If it doesn't load, you can <a href="https://wiki.revamp-it.ch/" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:underline">open it in a new tab</a>.</p>
    </div>
  </section>

  <!-- Full-width iframe -->
  <div class="w-full bg-gray-200 pr-4">
    <iframe src="https://wiki.revamp-it.ch/" class="w-full block" title="RevampIT Wiki" frameborder="0" sandbox="allow-same-origin allow-scripts allow-forms allow-popups" style="height: calc(100vh - 6rem);"></iframe>
  </div>

  <!-- Note / fallback link centered again -->
  <div class="max-w-7xl mx-auto px-4 py-4">
    <p class="text-sm text-gray-500">Note: Some external sites may block embedding via X-Frame-Options or CSP. In that case use <a href="https://wiki.revamp-it.ch/" target="_blank" rel="noopener noreferrer">the wiki link</a>.</p>
  </div>
</main>
`.trim();
}
