import type { Request, Response } from "express";

import { baseTemplate } from "../../../templates/base.js";

export default (req: Request, res: Response) => {
  const service = {
    title: 'Hardware Recycling',
    description: 'Responsible recycling and refurbishment of IT equipment. We give your old devices a new life while ensuring secure data deletion.',
    hero: {
      title: 'Hardware Recycling',
      subtitle: 'Sustainable IT Solutions',
      description: "We provide responsible recycling and refurbishment services for IT equipment, helping reduce electronic waste while ensuring secure data deletion."
    },
    features: [
      {
        title: 'Secure Data Deletion',
        description: 'Complete and secure deletion of all data from devices.'
      },
      {
        title: 'Equipment Refurbishment',
        description: 'Professional refurbishment of IT equipment to extend device lifecycles.'
      },
      {
        title: 'Component Recycling',
        description: 'Responsible recycling of electronic components with proper e-waste handling.'
      },
      {
        title: 'Free Pickup Service',
        description: 'Convenient pickup service for eligible equipment to make recycling easy.'
      }
    ],
    pricing: {
      base: 'Free for most items',
      details: [
        'Free pickup service',
        'Secure data deletion',
        'Environmentally responsible',
        'Certificate of destruction'
      ]
    },
    process: [
      {
        step: 1,
        title: 'Dropoff / Pickup',
        description: "Bring your equipment to our location or request a pickup for eligible items."
      },
      {
        step: 2,
        title: 'Data Security',
        description: 'We securely erase or destroy data according to best practices before recycling or reuse.'
      },
      {
        step: 3,
        title: 'Refurbishment',
        description: 'Repairable items are refurbished and given a second life where possible.'
      },
      {
        step: 4,
        title: 'Responsible Disposal',
        description: 'Non-repairable components are recycled through certified e-waste channels.'
      }
    ]
  };

  const featuresHtml = service.features.map((f) => `
    <div class="bg-white rounded-xl p-8 shadow-lg">
      <h3 class="text-2xl font-bold mb-3">${f.title}</h3>
      <p class="text-gray-600">${f.description}</p>
    </div>
  `).join('');

  const processHtml = service.process.map((p) => `
    <div class="text-center">
      <div class="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">${p.step}</div>
      <h3 class="text-xl font-bold mb-3">${p.title}</h3>
      <p class="text-gray-600">${p.description}</p>
    </div>
  `).join('');

  const pricingDetails = service.pricing.details.map((d) => `
    <div class="flex items-center">
      <span class="w-4 h-4 rounded-full bg-green-500 inline-block mr-3"></span>
      <span class="text-gray-600">${d}</span>
    </div>
  `).join('');

  const content = `
<main class="pt-20 min-h-screen">
  <!-- Hero Section -->
  <section class="bg-gray-200 py-20">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-3xl font-bold mb-4">${service.hero.title}</h1>
      <p class="text-gray-600">${service.hero.description}</p>
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

  <!-- Pricing Section -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-lg">
        <h2 class="text-3xl font-bold mb-8 text-center">Pricing</h2>
        <div class="text-center mb-8">
          <p class="text-2xl font-bold text-green-600">${service.pricing.base}</p>
        </div>
        <div class="space-y-4">
          ${pricingDetails}
        </div>
      </div>
    </div>
  </section>

  <!-- Process Section -->
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-12 text-center">Our Process</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        ${processHtml}
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-20 bg-gradient-to-r from-green-700 to-green-800 text-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold mb-6">Ready to Recycle Your Hardware?</h2>
      <p class="text-xl mb-8 max-w-2xl mx-auto text-green-100">Contact us today to arrange pickup or dropoff, or to learn more about our refurbishment and secure data deletion services.</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/contact" class="inline-block bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300 text-lg">Contact Us</a>
        <a href="/services" class="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 text-lg">Back to Services</a>
      </div>
    </div>
  </section>
</main>
`.trim();

  const html = baseTemplate({ content, req });
  res.send(html);
}