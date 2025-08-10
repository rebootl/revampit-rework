export function pageContent(language) {
  const repairDetails = {
    hero: {
      title: 'Computer Repair & Upgrades',
      subtitle: 'Expert Repairs You Can Trust',
      description:
        'We combine technical expertise with sustainable practices to extend the life of your devices. Our repair services focus on fixing what others can\'t, saving you money and reducing electronic waste.'
    },
    features: [
      {
        title: 'Component-Level Repairs',
        description:
          'We don\'t just replace parts - we fix them. Our technicians can repair motherboards, power supplies, and other components at the circuit level.'
      },
      {
        title: 'Hardware Upgrades',
        description:
          'Extend the life of your computer with strategic upgrades. We can help you choose and install the right components to meet your needs.'
      },
      {
        title: 'Diagnostic Services',
        description:
          'Comprehensive diagnostics to identify and fix issues quickly. We use professional tools and years of experience to pinpoint problems accurately.'
      },
      {
        title: 'Same-Day Service',
        description:
          'Need your device back quickly? We offer same-day repairs for many common issues. Just bring it in during our opening hours.'
      }
    ],
    pricing: {
      base: 'Starting from CHF 70/hour',
      details: [
        'Free initial diagnosis',
        'No fix, no fee policy',
        'Transparent pricing',
        'Warranty on repairs'
      ]
    },
    process: [
      {
        step: 1,
        title: 'Diagnosis',
        description: 'We\'ll examine your device and provide a detailed assessment of the issue.'
      },
      {
        step: 2,
        title: 'Quote',
        description: 'You\'ll receive a transparent quote for the repair, with no hidden fees.'
      },
      {
        step: 3,
        title: 'Repair',
        description: 'Our technicians will fix your device using high-quality parts and proven techniques.'
      },
      {
        step: 4,
        title: 'Testing',
        description: 'We thoroughly test all repairs to ensure your device is working perfectly.'
      }
    ]
  };

  const featuresHtml = repairDetails.features
    .map(
      (f) => `
        <div class="bg-white rounded-xl p-8 shadow-lg">
          <h3 class="text-2xl font-bold mb-3">${f.title}</h3>
          <p class="text-gray-600">${f.description}</p>
        </div>`
    )
    .join('');

  const processHtml = repairDetails.process
    .map(
      (p) => `
        <div class="bg-gray-50 rounded-xl p-8">
          <div class="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">${p.step}</div>
          <h3 class="text-xl font-semibold mb-3">${p.title}</h3>
          <p class="text-gray-600">${p.description}</p>
        </div>`
    )
    .join('');

  const pricingDetails = repairDetails.pricing.details
    .map((d) => `
      <div class="flex items-center">
        <span class="w-4 h-4 rounded-full bg-green-500 inline-block mr-3"></span>
        <span class="text-gray-600">${d}</span>
      </div>`)
    .join('');

  return `
<main class="pt-20 min-h-screen">
  <!-- Hero Section -->
  <section class="bg-gray-200 py-20">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-3xl font-bold mb-4">${repairDetails.hero.title}</h1>
      <p class="text-gray-600">${repairDetails.hero.description}</p>
    </div>
  </section>

  <!-- Features Section -->
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        ${featuresHtml}
      </div>
    </div>
  </section>

  <!-- Process Section -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-12 text-center">Our Repair Process</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        ${processHtml}
      </div>
    </div>
  </section>

  <!-- Pricing Section -->
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-lg">
        <h2 class="text-3xl font-bold mb-8 text-center">Pricing</h2>
        <div class="text-center mb-8">
          <p class="text-2xl font-bold text-green-600">${repairDetails.pricing.base}</p>
        </div>
        <div class="space-y-4">
          ${pricingDetails}
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-20 bg-gradient-to-r from-green-700 to-green-800 text-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold mb-6">Ready to Repair Your Device?</h2>
      <p class="text-xl mb-8 max-w-2xl mx-auto text-green-100">
        Contact us today for a free diagnosis and quote. We'll help you get your device back in working order quickly and affordably.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/contact" class="inline-block bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300 text-lg">
          Contact Us
        </a>
        <a href="/services" class="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 text-lg">
          Back to Services
        </a>
      </div>
    </div>
  </section>
</main>
`.trim();
}
