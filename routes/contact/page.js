export function pageContent(language) {
  return `
<main class="pt-20 min-h-screen">
  <!-- Hero -->
  <section class="relative bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white py-24 overflow-hidden">
    <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
    <div class="container mx-auto px-4 relative">
      <div class="max-w-3xl">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">Contact RevampIT</h1>
        <p class="text-xl text-green-100">Have a question or want to get involved? Send us a message and we'll get back to you as soon as possible.</p>
      </div>
    </div>
  </section>

  <!-- Contact Form -->
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-lg">
        <h2 class="text-2xl font-bold mb-6">Send us a message</h2>
        <form id="contact-form" class="space-y-6" novalidate>
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input id="name" name="name" type="text" required class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your full name" />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email address</label>
            <input id="email" name="email" type="email" required class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="you@example.com" />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea id="message" name="message" rows="6" required class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Write your message here..."></textarea>
          </div>

          <div class="flex items-center justify-center">
            <button type="submit" class="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">Send Message</button>
            <p id="form-status" class="text-sm text-gray-600" aria-live="polite"></p>
          </div>

          <p class="text-xs text-gray-500">By sending a message you agree that we may use the information to contact you. We won't share your personal data with third parties without consent.</p>
        </form>
      </div>
    </div>
  </section>


</main>
`.trim();
}
