import type { Request, Response } from "express";

import { baseTemplate } from "../../../templates/base.js";

export default (req: Request, res: Response) => {
  const service = {
    title: 'Data Recovery & Transfer',
    description: 'Professional data transfer and recovery services for all types of storage media. We help you access and transfer your valuable data from any device or format.',
    hero: {
      title: 'Data Recovery & Transfer',
      subtitle: 'Access Your Data, Preserve Your History',
      description: "Whether you need to recover data from a non-working device, transfer data between computers, or access data from legacy storage media, we have the expertise and equipment to help."
    },
    features: [
      {
        title: 'Media Support',
        description: 'Our Dino server features 14 front-accessible drives and multiple interfaces, ready to handle almost any data transfer task.'
      },
      {
        title: 'Data Transfer',
        description: 'Transfer data between computers, migrate settings, or create backups. We can handle large data volumes efficiently.'
      },
      {
        title: 'Legacy Media Access',
        description: 'Access data from any storage media, even if you no longer have the necessary drive. We support all formats including floppy disks, ZIP drives, MO drives, and more.'
      },
      {
        title: 'Custom Solutions',
        description: 'Need a similar server setup for your location? We can build a custom solution tailored to your specific needs.'
      }
    ],
    pricing: {
      base: 'CHF 30 per job + media cost',
      details: [
        'Base fee: CHF 30 per job',
        'Media cost additional if not provided',
        'Legacy media support available',
        'Custom solutions on request'
      ],
      mediaPrices: [
        'Floppy disks (3.5" and 5.25"): CHF 10 per disk',
        'ZIP/Syquest/EZ Drive/Jazz: CHF 20 per disk',
        'MO drives (3.5"-5.25"): CHF 30 per disk',
        'Hard disks: CHF 40 per disk',
        'Tape drives: CHF 50 per tape',
        'VHS/Records: Price on request'
      ]
    },
    process: [
      {
        step: 1,
        title: 'Assessment',
        description: "We'll evaluate your storage media and determine the best approach for data transfer or recovery."
      },
      {
        step: 2,
        title: 'Transfer',
        description: "Using our specialized equipment, we'll transfer your data to the media of your choice."
      },
      {
        step: 3,
        title: 'Verification',
        description: "We verify the integrity of the transferred data to ensure everything is copied correctly."
      },
      {
        step: 4,
        title: 'Delivery',
        description: "Your data is returned to you on the media of your choice, ready to use."
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

  const mediaPricesHtml = service.pricing.mediaPrices.map((mp) => `
    <li class="text-gray-600">${mp}</li>
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

        <div class="mt-8">
          <h3 class="text-xl font-semibold mb-3">Typical Media Prices</h3>
          <ul class="list-disc list-inside space-y-2">
            ${mediaPricesHtml}
          </ul>
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
      <h2 class="text-4xl font-bold mb-6">Ready to Recover Your Data?</h2>
      <p class="text-xl mb-8 max-w-2xl mx-auto text-green-100">Contact us today for an assessment and secure data recovery or transfer.</p>
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