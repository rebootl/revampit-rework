/**
 * The HTML content for the page, exported as a template literal function.
 * @param {Object} req - The request object
 * @returns {string} The HTML content
 */
export function pageContent(req) {
  return `
<main class="pt-20 min-h-screen">
  <!-- Hero Section -->
  <section class="bg-gray-200 py-20">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-3xl font-bold mb-4">Workshops — Linux & Open Source</h1>
      <p class="text-gray-600">Practical training to help you use and maintain open source software. We provide hands-on workshops for individuals, schools and organisations focused on practical skills and privacy-respecting tools.</p>
    </div>
  </section>

  <!-- Workshops Info -->
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-lg">
        <h2 class="text-3xl font-bold mb-6">Upcoming & Organised Workshops</h2>
        <p class="text-gray-700 mb-6">We organise regular workshops covering topics such as Linux installation, basic system administration, privacy tools, and migrating to open source alternatives. Sessions are suitable for beginners and more advanced users alike.</p>

        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-2">Registration & Schedule</h3>
          <p class="text-gray-600">For managing workshop schedules and registrations we use an external platform called OpenKi. We'll integrate OpenKi directly into this page soon for seamless booking.</p>
        </div>

        <!-- OpenKi placeholder -->
        <div id="openki-placeholder" class="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
          <p class="text-gray-600 mb-4">OpenKi integration placeholder</p>
          <p class="text-sm text-gray-500">Here we'll embed the OpenKi widget so you can browse upcoming workshops and register directly from our site. For now, please visit our OpenKi page (link to be added).</p>
        </div>

      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-20 bg-gradient-to-r from-green-700 to-green-800 text-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold mb-6">Want us to run a workshop for your group?</h2>
      <p class="text-xl mb-8 max-w-2xl mx-auto text-green-100">Contact us to discuss custom workshops, school visits, or corporate training on open source technologies.</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/contact" class="inline-block bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300 text-lg">Contact Us</a>
        <a href="/workshops/archives" class="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 text-lg">Past Workshops</a>
      </div>
    </div>
  </section>
</main>
`.trim();
}
