import type { Request, Response } from "express";

import { baseTemplate } from "../../../templates/base.js";

export default (req: Request, res: Response) => {
  const service = {
    title: 'Web Design & Development',
    description: 'Professional web design and development services using open source technologies. Modern, responsive websites built with sustainability and performance in mind.',
    hero: {
      title: 'Web Design & Development',
      subtitle: 'Sustainable Web Solutions',
      description: "We create modern, responsive websites using open source technologies that prioritize performance, sustainability, and user experience."
    },
    features: [
      {
        title: 'Custom Web Development',
        description: 'Tailored web applications built with modern open source technologies to meet your specific business needs.'
      },
      {
        title: 'Responsive Design',
        description: 'Beautiful, user-friendly designs that work perfectly across all devices and screen sizes.'
      },
      {
        title: 'Open Source CMS',
        description: 'Modern content management systems using Strapi, Payload, Tina CMS, or WordPress that give you full control.'
      },
      {
        title: 'Ongoing Support',
        description: 'Comprehensive maintenance and support to keep your website secure, updated, and performing optimally.'
      }
    ],
    pricing: {
      base: 'CHF 70/hour',
      details: [
        'Free initial consultation',
        'Open source technologies',
        'Responsive design included',
        'SEO optimization',
        'Ongoing support available'
      ]
    },
    process: [
      {
        step: 1,
        title: 'Discovery',
        description: 'We discuss your goals, audience, and technical requirements to craft a tailored plan.'
      },
      {
        step: 2,
        title: 'Design & Prototype',
        description: 'Create mockups and interactive prototypes to refine UX and visuals before development.'
      },
      {
        step: 3,
        title: 'Development',
        description: 'Implement the website using modern open source tools, focusing on performance and accessibility.'
      },
      {
        step: 4,
        title: 'Launch & Support',
        description: 'Deploy the site and provide ongoing support, maintenance, and performance monitoring.'
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
      <h2 class="text-4xl font-bold mb-6">Ready to Build Your Website?</h2>
      <p class="text-xl mb-8 max-w-2xl mx-auto text-green-100">Contact us today for a consultation and to discuss your project's requirements.</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/contact" class="inline-block bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300 text-lg">Contact Us</a>
        <a href="/services" class="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 text-lg">Back to Services</a>
      </div>
    </div>
  </section>
</main>
`.trim();

  const html = baseTemplate({ content, req: req as any });
  res.send(html);
};